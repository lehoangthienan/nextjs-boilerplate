import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const REDUX_PERSIST = {
  key: 'root',
  storage,
  version: '1.0',
  whitelist: ['user', 'language', 'app'],
  transforms: [immutableTransform()],
  stateReconciler: autoMergeLevel2,
};

export default REDUX_PERSIST;
