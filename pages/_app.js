import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { fromJS } from 'immutable';
import moment from 'moment';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import '../utils/moment_vi';

import configureStore from '../configureStore';

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
          <link rel="icon" type="image/png" href="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52450069_1244416252350097_4263800870111543296_o.jpg?_nc_cat=103&_nc_oc=AQkr71IjoW5A-nwZ1B6EDpPbq1ezM87gKs8R6u3qCHnX6r3farJ0KsYKEUUDFAcGsFBu7clAvhTeht1WnCRlM4gX&_nc_ht=scontent.fsgn5-7.fna&oh=dd6926dd1030c4336819dd7338a6785c&oe=5E363849"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
            key="font-seccond"
          />
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
