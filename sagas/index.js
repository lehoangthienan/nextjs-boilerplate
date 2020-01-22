import { all } from 'redux-saga/effects';
import AppSagas from './appSagas';
/* ------------- Connect Types To Sagas ------------- */

const root = function* root() {
  yield all([
    AppSagas(),
  ]);
};

export default root;
