import React, {Component} from 'react';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { connect } from 'react-redux'
import { setWords } from '../actions/actions'


class Speech extends Component {

  constructor(props) {
    super(props)

    this.words = []

    this.recognizer = speechCommands.create('BROWSER_FFT');
    const that = this
    this.recognizer.ensureModelLoaded().then( function() {
      const words = that.recognizer.wordLabels()
      that.props.dispatch(setWords(words))
    })
  }

  render() {
    const listItems = this.props.words.map((w) => <li key={w}>{w}</li>)
     
    return (
      <div>SpeechCommands
        <ul>
        {listItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    words: state.speech.words
  }
}

export default connect(mapStateToProps)(Speech)
