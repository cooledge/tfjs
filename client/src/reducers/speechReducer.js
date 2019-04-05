import constants from '../constants/actionTypes'

var initialState = {
  words: ['test'],
  highlighted: '',
  is_on: false
}

export default (state = initialState, action) => {
  var updated = Object.assign({}, state)
  switch (action.type) {
    case constants.SET_WORDS:
      updated['words'] = action.words
      return updated
    case constants.HIGHLIGHT_WORD:
      updated['highlighted'] = action.word
      return updated
    case constants.TURN_ON:
      updated['is_on'] = true
      return updated
    case constants.TURN_OFF:
      updated['is_on'] = false
      return updated
    default:
      return state
  }
}
