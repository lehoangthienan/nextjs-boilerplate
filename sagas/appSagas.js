import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Notifications from 'react-notification-system-redux';
import { setToken } from '../configures/axios';
import AppActions, { AppTypes } from '../redux/appRedux';

function* appRootSagas() {
  yield all([
    yield takeLatest(AppTypes.SHOW_SUCCESS_REQUEST, showSuccessRequest),
    yield takeLatest(AppTypes.SHOW_ERROR_REQUEST, showErrorRequest),
    yield takeLatest(AppTypes.STARTUP_WORKING_FLOW, startupWorkingFlow),
  ]);
}

/*
    App working flow when firt load
  */
function* startupWorkingFlow({ history }) { // eslint-disable-line
  try {
    let tokenData = '';
    if (localStorage.getItem('token')) {
      tokenData = localStorage.getItem('token');
    }
    // if (localStorage.getItem('user')) yield put(UserActions.setUserInformationFromLocalDb(JSON.parse(localStorage.getItem('user'))))
    const isSignin = JSON.parse(localStorage.getItem('isLogin'));
    if (isSignin) {
      setToken(tokenData);
      yield put(AppActions.getAppReady(true));
    } else {
      setToken('');
      yield put(AppActions.getAppReady(true));
    }
  } catch (error) {
    setToken('');
    yield put(AppActions.getAppReady(true));
    yield put(AppActions.showErrorRequest(error));
  }
}

function* showSuccessRequest({ message }) {
  const notificationOpts = {
    message,
    position: 'tc',
    autoDismiss: 3,
  };
  yield put(Notifications.success(notificationOpts));
}

function* showErrorRequest(action) {
  let { error } = action;
  try {
    yield call(delay, 500);
    let message = '';
    if (typeof error === 'string') {
      message = error;
    } else {
      if (typeof error.data === 'object') {
        error = error.data;
      }

      if (error.message === 'jwt expired' || error.code === 401) {
        // yield put(UserActions.logout());
      }

      message = error.message || 'Server error';
    }

    const notificationOpts = {
      title: 'Error',
      message,
      position: 'tc',
      autoDismiss: 3,
    };

    yield put(Notifications.error(notificationOpts));
  } catch (e) {
    const notificationOpts = {
      title: 'Error',
      message: 'Server error',
      position: 'tc',
      autoDismiss: 3,
    };

    yield put(Notifications.error(notificationOpts));
  }
}

export default appRootSagas;
