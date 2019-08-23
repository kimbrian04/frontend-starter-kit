import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
// add i18n
import './i18n'
// add redux store
import configureStore from './store/configureStore'

import App from './App'

const store = configureStore()

ReactDOM.render(
  <Suspense fallback="Loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
