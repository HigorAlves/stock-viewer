/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { store } from '@jetpack/store'
import { Provider } from 'react-redux'

import { Home } from './src/screens'

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
