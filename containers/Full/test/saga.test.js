/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects'

import AppActions, { AppTypes } from '../../../redux/appRedux'
import appSagas, { startupWorkingFlow } from '../../../sagas/appSagas'

describe('appDataSagas Saga', () => {  
  it('should start task to watch for STARTUP_WORKING_FLOW action', () => {
    const appDataSagas = appSagas()
    const takeLatestDescriptor = appDataSagas.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(AppTypes.STARTUP_WORKING_FLOW, startupWorkingFlow))
  })

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const startupWorkingFlowGenerator = startupWorkingFlow()
    const takeLatestDescriptor = startupWorkingFlowGenerator.next().value
    expect(takeLatestDescriptor).toEqual(put(AppActions.getAppReady(true))) //eslint-disable-line
  })
})