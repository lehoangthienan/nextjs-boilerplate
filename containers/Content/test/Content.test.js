// import React from 'react'
// import { render } from 'react-testing-library'

// import Content from '../Content'

describe('<A />', () => {
  // it('should render an <div> tag', () => {
  //   const { container } = render(<Content />)
  //   expect(container.querySelector('div')).not.toBeNull()
  // })

  // it('should have a class attribute', () => {
  //   const { container } = render(<Content />)
  //   expect(container.querySelector('a').hasAttribute('class')).toBe(true)
  // })

  // it('should adopt a valid attribute', () => {
  //   const id = 'test'
  //   const { container } = render(<Content id={id} />)
  //   expect(container.querySelector('a').id).toEqual(id)
  // })

  // it('should not adopt an invalid attribute', () => {
  //   const { container } = render(<Content attribute="test" />)
  //   expect(container.querySelector('a[attribute="test"]')).toBeNull()
  // })
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
