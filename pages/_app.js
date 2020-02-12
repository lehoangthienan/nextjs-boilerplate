import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { fromJS } from 'immutable';
import moment from 'moment';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import configureStore from '../configureStore';

import '../utils/moment_vi';

const cache = createIntlCache();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  }

  componentDidMount() {
    moment.locale('vi');
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      locale,
      messages,
    } = this.props;

    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache
    );

    return (
      <ReduxProvider store={store}>
        <Head>
          <link rel="icon" type="image/png" href="https://reactjsexample.com/content/images/2016/08/20160828182925.jpg"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
            key="font-seccond"
          />
          <link rel="manifest" href="/public/static/manifest/manifest.json" />
          <link rel="manifest" href="/public/static/manifest/site.webmanifest" />
          <link rel="shortcut icon" href="/public/static/icons/dowload.svg" />
        </Head>
        <RawIntlProvider value={intl}>
          <Component {...pageProps} />
        </RawIntlProvider>
      </ReduxProvider>
    );
  }
}

export default withRedux(configureStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state),
})(withReduxSaga(MyApp));
