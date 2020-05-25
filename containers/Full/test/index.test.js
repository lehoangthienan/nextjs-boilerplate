import React from 'react'
import renderer from 'react-test-renderer'
import preloadAll from 'jest-next-dynamic'
import { Provider as ReduxProvider } from 'react-redux'
import { createIntl, createIntlCache, RawIntlProvider, defineMessages } from 'react-intl'

import configureStore from '../../../configureStore'
import { scope } from '../../../components/Header/messages'
import Full from '../index'

describe('<Full />', () => {
  let store
  let intl
  let messages
  
  beforeAll(async () => {
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

    await preloadAll()
  })
    
  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <ReduxProvider store={store}>
          <RawIntlProvider value={intl}>
            <Full />
          </RawIntlProvider>
        </ReduxProvider>,
      )
      .toJSON()

    expect(renderedComponent).toMatchSnapshot()
  })
})
