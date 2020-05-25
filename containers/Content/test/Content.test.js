import React from 'react'
import { render } from 'react-testing-library'

import Content from '../Content'

describe('<Form />', () => {
  it('should render an <Form> tag', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('form')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('form').hasAttribute('class')).toBe(true)
  })

  it('should adopt a valid attribute', () => {
    const id = 'basic'
    const { container } = render(<Content id={id} />)
    expect(container.querySelector('form').id).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Content attribute="test" />)
    expect(container.querySelector('form[attribute="test"]')).toBeNull()
  })
})

describe('<Input />', () => {
  it('should render an <Input> tag', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('input')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('input').hasAttribute('class')).toBe(true)
  })
})

describe('<Button />', () => {
  it('should render an <Button> tag', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('button')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('button').hasAttribute('class')).toBe(true)
  })
})

describe('<span />', () => {
  it('should render an <span> tag', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('span')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('span').hasAttribute('class')).toBe(true)
  })
})
