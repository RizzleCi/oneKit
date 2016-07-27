import {ADD_NAME} from '../actions'

const initialState = {
  name: ''
}

export default function name (state = initialState, action) {
  switch (action.type) {
    case "ADD_NAME":
      return Object.assign({}, state, {
        name: action.text
      })
    default: 
      return state
  }
}
