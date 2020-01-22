import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import loGet from 'lodash/get';

import AppActions from '../../redux/appRedux';
import { connectSocket, disConnectSocket } from '../../services/socketService';

import '../../scss/style.scss';
import 'antd/dist/antd.css';

const Header = dynamic({ loader: () => import('../../components/Header') });
const Footer = dynamic({ loader: () => import('../../components/Footer') });

class Full extends Component {
  componentDidMount() {
    const {
      startupWorkingFlow, history, dispatch, // eslint-disable-line
    } = this.props;
    startupWorkingFlow(history);
    let token = '';
    let user = {};

    if (localStorage.getItem('token')) token = localStorage.getItem('token');
    if (localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'));

    startupWorkingFlow(history);

    connectSocket(token, dispatch, loGet(user, ['_id'], ''));
  }

  componentWillUnmount() {
    disConnectSocket();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Full.propTypes = {
  startupWorkingFlow: PropTypes.func,
  history: PropTypes.object,
  children: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isReady: state.toJS().app.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  startupWorkingFlow: (history) => {
    dispatch(AppActions.startupWorkingFlow(history));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Full);
