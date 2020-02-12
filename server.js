const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const sm = require('sitemap');
const glob = require('glob');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './', dev });
const handler = app.getRequestHandler();

const languages = glob
  .sync('./translations/*.json')
  .map((f) => path.basename(f, '.json'));

const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(
      `@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`
    );
    const localeDataScript = fs.readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

const detectLocale = (req) => {
  const cookieLocale = req.cookies.locale;
  if (languages.indexOf(cookieLocale) !== -1) {
    return cookieLocale;
  }
  return 'vi';
};

// eslint-disable-next-line global-require
const getMessages = (locale) => require(`./translations/${locale}.json`);

app.prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());
    server.use((req, res, next) => {
      const locale = detectLocale(req);

      req.locale = locale;
      req.localeDataScript = getLocaleDataScript(locale);
      req.messages = getMessages(locale);
      res.cookie('locale', locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });

      next();
    });
    server.use('/public', express.static('public'));

    server.use('/', express.static(path.join(__dirname, '/static')));

    server.get('/_next/*', (req, res) => handler(req, res));

    server.get('/', (req, res) => app.render(req, res, '/'));

    server.get('/robots.txt', async (req, res) => {
      await axios.get('https://api.xxx.com/robotstxt')
        .then((response) => {
          const { content } = response.data.robots;
          fs.writeFile('robots.txt', content, 'utf-8', (err) => {
            if (err) console.log(err);
            res.sendFile(path.join(__dirname, 'robots.txt'));
          });
        });
    });

    server.get('/sitemap.xml', async (req, res) => {
      const sitemap = sm.createSitemap({
        hostname: 'https://xxx.com',
      });
      await axios.get('https://api.xxx.com/sitemap')
        .then((response) => {
          const { sitemaps } = response.data;
          sitemaps.forEach((s) => {
            sitemap.add({
              url: s.url,
              changefreq: s.changefreq,
              priority: s.priority,
            });
          });
        });
      sitemap.toXML((err, xml) => {
        if (err) {
          res.status(500).end();
          return;
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
      });
    });

    // custom route
    server.get('/xxx-xxx', (req, res) => {
      app.render(req, res, '/xxx');
    });

    server.get('*', (req, res) => handler(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err && console.log(err);
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error && console.log('error', error);
  });
