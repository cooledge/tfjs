import constants from '../constants/actionTypes'

var initialState = {
  words: ['test']
}

export default (state = initialState, action) => {
  var updated = Object.assign({}, state)
  switch (action.type) {
    case constants.SET_WORDS:
      updated['words'] = action.words
      return updated
    default:
      return state
  }
}
