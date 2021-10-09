import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { createIntl, createIntlCache, RawIntlProvider, defineMessages } from 'react-intl'
import renderer from 'react-test-renderer'

import Header from '../index'
import configureStore from '../../../configureStore'
import { scope } from '../messages'

describe('<Header />', () => {
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

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <ReduxProvider store={store}>
          <RawIntlProvider value={intl}>
            <Header />
          </RawIntlProvider>
        </ReduxProvider>,
      )
      .toJSON()

    expect(renderedComponent).toMatchSnapshot()
  })
})
