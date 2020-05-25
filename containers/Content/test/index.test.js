import React from 'react'
import renderer from 'react-test-renderer'

import Content from '../index'

describe('<Content />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Content />,
      )
      .toJSON()

    expect(renderedComponent).toMatchSnapshot()
  })
})
