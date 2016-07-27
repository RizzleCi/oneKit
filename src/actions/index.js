export const ADD_NAME = 'ADD_NAME'
export function addName(text) {
  return {
    type: ADD_NAME,
    text
  }
}