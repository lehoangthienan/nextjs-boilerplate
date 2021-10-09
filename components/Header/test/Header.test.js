import React from 'react'
import { render } from 'react-testing-library'
import { Provider as ReduxProvider } from 'react-redux'
import { createIntl, createIntlCache, RawIntlProvider, defineMessages } from 'react-intl'

import Header from '../Header'
import configureStore from '../../../configureStore'
import { scope } from '../messages'
  
describe('<div />', () => {
  let store
  let intl
  let messages

  beforeAll(() => {
    const cache = createIntlCache()
    store = configureStore({})
    intl = createIntl(
      {
        locale: 'en',
        messages,
      },
      cache
    )

    messages = defineMessages({
      vi: {
        id: `${scope}.vi`,
        defaultMessage: 'Viet Nam',
      },
      en: {
        id: `${scope}.en`,
        defaultMessage: 'English',
      },
    })
  })

  it('should render an <div> tag', () => {

    const { container } = render(
      <ReduxProvider store={store}>
        <RawIntlProvider value={intl}>
          <Header />
        </RawIntlProvider>
      </ReduxProvider>)
    expect(container.querySelector('div')).not.toBeNull()
  })

  it('should have a class attribute', () => {
    const { container } = render(
      <ReduxProvider store={store}>
        <RawIntlProvider value={intl}>
          <Header />
        </RawIntlProvider>
      </ReduxProvider>)
    expect(container.querySelector('div').hasAttribute('class')).toBe(false)
  })
  
  it('should not adopt an invalid attribute', () => {
    const { container } = render(
      <ReduxProvider store={store}>
        <RawIntlProvider value={intl}>
          <Header />
        </RawIntlProvider>
      </ReduxProvider>)
    expect(container.querySelector('div[attribute="test"]')).toBeNull()
  })
})