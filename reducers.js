import { combineReducers } from 'redux-immutable';

export default combineReducers({
  app: require('./redux/appRedux').reducer, // eslint-disable-line
});
