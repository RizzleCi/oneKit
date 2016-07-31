import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'

import Root from './src/pages/root'

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}

// function configureStore(initialState) {
//   let store = createStore(reducer, initialState, compose(
// 	  applyMiddleware(thunk),
// 	  window.devToolsExtension ? window.devToolsExtension() : f => f
// 	))
//   return store
// }
// const store = configureStore
let store = configureStore()
render(
	<Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
