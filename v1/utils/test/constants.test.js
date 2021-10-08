import {
  COUNTRY_CODE_VN,
  EVENT_SOCKET,
} from '../constants'

describe('Test constant contry code vn', () => {
  it('Test constant contry code vn', () => {
    const vn = '+84'
    expect(COUNTRY_CODE_VN).toEqual(vn)
  })
})

describe('event socket contants', () => {
  it('test event CONNECT', () => {
    const event = 'connect'
    expect(EVENT_SOCKET.CONNECT).toEqual(event)
  })

  it('test event DISCONNECT', () => {
    const event = 'disconnect'
    expect(EVENT_SOCKET.DISCONNECT).toEqual(event)
  })

  it('test event ERROR', () => {
    const event = 'error'
    expect(EVENT_SOCKET.ERROR).toEqual(event)
  })
})