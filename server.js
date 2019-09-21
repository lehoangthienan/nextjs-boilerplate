
const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const sm = require('sitemap');

const PORT = process.env.PORT || 3004;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './', dev });
const handler = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();

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

    server.listen(PORT, (err) => {
      if (err) throw err && console.log(err);
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error && console.log('error');
  });
