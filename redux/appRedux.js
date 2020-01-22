import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startupWorkingFlow: ['history'],
  getAppReady: ['isReady'],
  showSuccessRequest: ['message'],
  showErrorRequest: ['error'],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = fromJS({
  error: '',
  isReady: false,
});

/* ------------- Reducers ------------- */
const startupWorkingFlow = (state) => state.merge({ isReady: false });

const getAppReady = (state, { isReady }) => state.merge({ isReady });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP_WORKING_FLOW]: startupWorkingFlow,
  [Types.GET_APP_READY]: getAppReady,
});
