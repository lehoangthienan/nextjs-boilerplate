import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'

const REDUX_PERSIST = {
  key: 'root',
  storage,
  version: '1.0',
  whitelist: ['user', 'language', 'app'],
  transforms: [immutableTransform()],
}

export default REDUX_PERSIST
