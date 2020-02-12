import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Cookie from 'js-cookie';

import { setToken } from '../configures/axios';
import AppActions, { AppTypes } from '../redux/appRedux';
import {
  successNotification,
  errorNotification,
} from '../utils/notification';

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
    if (Cookie.get('isSignin')) setToken(Cookie.get('token') || '');
    else setToken('');
    yield put(AppActions.getAppReady(true));
  } catch (error) {
    setToken('');
    yield put(AppActions.getAppReady(true));
    yield put(AppActions.showErrorRequest(error));
  }
}

function* showSuccessRequest({ message }) {
  successNotification('Success', message);
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

    errorNotification('Error', message);
  } catch (e) {
    errorNotification('Error', 'Server error');
  }
}

export default appRootSagas;
