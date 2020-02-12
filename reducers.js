import { combineReducers } from 'redux-immutable';

import { reducer as appReducer } from './redux/appRedux';

export default combineReducers({
  app: appReducer,
});
