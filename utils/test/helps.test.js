import {
  formatCurrency,
  changeAlias,
} from '../helper'

describe('test helpers', () => {
  it('test formatCurrency', () => {
    const req = '10000000'
    const res = '10,000,000 VND'
    expect(formatCurrency(req)).toEqual(res)
  })
  
  it('test changeAlias', () => {
    const req = 'Chào bạn'
    const res = 'Chao ban'
    expect(changeAlias(req)).toEqual(res)
  })
})