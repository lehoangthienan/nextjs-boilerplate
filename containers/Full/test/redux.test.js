import preloadAll from 'jest-next-dynamic'

import AppActions from '../../../redux/appRedux'
import { mapDispatchToProps } from '../Full'

describe('Full redux', () => {
  beforeAll(async () => {
    await preloadAll()
  })

  it('returns the startupWorkingFlow', () => {
    expect(AppActions.startupWorkingFlow(undefined)).toEqual({ //eslint-disable-line
      history: undefined,
      type: "STARTUP_WORKING_FLOW",
    })
  })

  describe('mapDispatchToProps', () => {

    describe('startupWorkingFlow', () => {

      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.startupWorkingFlow).toBeDefined()
      })

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.startupWorkingFlow(undefined)
        expect(dispatch).toHaveBeenCalledWith(AppActions.startupWorkingFlow(undefined)) //eslint-disable-line
      })

    })
  })
})
  