import actionTypes from '../constants/actionTypes'

export function setWords(words) {
  return {
    type: actionTypes.SET_WORDS,
    words: words
  }
}

