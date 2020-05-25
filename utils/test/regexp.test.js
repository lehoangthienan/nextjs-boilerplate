import {
  emailRule,
  fullnameRule,
  usernameRule,
  phoneRule,
  fileNameRule,
} from '../regexp'

describe(' test regexp', () => {
  it('test emailRule', () => {
    const req = 'lehoangthienan@gmail.com'
    expect(emailRule.test(req)).toEqual(true)
  })

  it('test emailRule', () => {
    const req = 'lehoangthienan'
    expect(emailRule.test(req)).toEqual(false)
  })

  it('test fullnameRule', () => {
    const req = 'Le Hoang Thien An'
    expect(fullnameRule.test(req)).toEqual(true)
  })
    
  it('test fullnameRule', () => {
    const req = 'le an !@#!@#%'
    expect(fullnameRule.test(req)).toEqual(false)
  })

  it('test usernameRule', () => {
    const req = 'lehoangthienan'
    expect(usernameRule.test(req)).toEqual(true)
  })

  it('test usernameRule', () => {
    const req = 'Chào'
    expect(usernameRule.test(req)).toEqual(false)
  })

  it('test phoneRule', () => {
    const req = '0965874123'
    expect(phoneRule.test(req)).toEqual(true)
  })

  it('test phoneRule', () => {
    const req = '0123asd'
    expect(phoneRule.test(req)).toEqual(false)
  })

  it('test phoneRule', () => {
    const req = 'Chào bạn'
    expect(phoneRule.test(req)).toEqual(false)
  })

  it('test fileNameRule', () => {
    const req = 'abc.com/123.jpg'
    expect(fileNameRule.test(req)).toEqual(false)
  })

  it('test fileNameRule', () => {
    const req = 'http://abc.com/123.jpg'
    expect(fileNameRule.test(req)).toEqual(true)
  })

  it('test fileNameRule', () => {
    const req = 'http://abc.abc/123.jpg'
    expect(fileNameRule.test(req)).toEqual(false)
  })

  it('test fileNameRule', () => {
    const req = 'Chào bạn'
    expect(fileNameRule.test(req)).toEqual(false)
  })
})