import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'

import Root from './src/pages/root'


// function configureStore(initialState) {
//   let store = createStore(reducer, initialState, compose(
// 	  applyMiddleware(thunk),
// 	  window.devToolsExtension ? window.devToolsExtension() : f => f
// 	))
//   return store
// }
// const store = configureStore
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())
render(
	<Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
