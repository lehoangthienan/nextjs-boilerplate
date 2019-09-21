import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { fromJS } from 'immutable'
import moment from 'moment'
import '../utils/moment_vi'

import createStore from '../configureStore';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  componentDidMount() {
    moment.locale('vi')
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state),
})(withReduxSaga(MyApp));
