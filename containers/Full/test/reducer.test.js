import { fromJS } from 'immutable'

import {
  reducer,
  startupWorkingFlow,
  getAppReady,
} from '../../../redux/appRedux'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      error: '',
      isReady: false,
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(reducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the startupWorkingFlow action correctly', () => {
    const expectedResult = state
    expect(reducer(state, startupWorkingFlow(state))).toEqual(expectedResult)
  })

  it('should handle the getAppReady action correctly', () => {
    const fixture = false
    const expectedResult = state.merge({ isReady: fixture })
    expect(reducer(state, getAppReady(state, { isReady: fixture }))).toEqual(expectedResult)
  })
})
