import actionTypes from '../constants/actionTypes'

export function setWords(words) {
  return {
    type: actionTypes.SET_WORDS,
    words: words
  }
}

export function highlightWord(word) {
  return {
    type: actionTypes.HIGHLIGHT_WORD,
    word: word
  }
}

export function turnOn() {
  return {
    type: actionTypes.TURN_ON,
  }
}

export function turnOff() {
  return {
    type: actionTypes.TURN_OFF,
  }
}

