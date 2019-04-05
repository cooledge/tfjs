import React, {Component} from 'react';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { connect } from 'react-redux'
import { setWords, highlightWord, turnOn, turnOff } from '../actions/actions'
import Switch from "react-switch";

class Speech extends Component {
  constructor(props) {
    super(props)

    this.recognizer = speechCommands.create('BROWSER_FFT');
    const that = this
    this.recognizer.ensureModelLoaded().then( function() {
      const words = that.recognizer.wordLabels()
      that.props.dispatch(setWords(words))
      //that.props.dispatch(highlightWord(words[0]))
    })
  }

  recognize() {
    const that = this
    this.recognizer.listen(({scores}) => {
      console.log(scores)
      // Turn scores into a list of (score,word) pairs.
      scores = Array.from(scores).map((s, i) => ({score: s, word: that.props.words[i]}));
      // Find the most probable word.
      scores.sort((s1, s2) => s2.score - s1.score);
      that.props.dispatch(highlightWord(scores[0].word))
    }, {probabilityThreshold: 0.75});
  }

  stop() {
    this.recognizer.stopListening();
  }

  handleOnOrOff(checked) {
debugger;
    if (checked) {  
      this.props.dispatch(turnOn());
    }
    else {
      this.props.dispatch(turnOff());
    }
     
  }

  render() {
    const listItems = this.props.words.map((w) => {
      if (this.props.highlighted === w){
        return <li key={w} className='highlighted'>{w}</li>
      }
      else{
        return <li key={w}>{w}</li>
      }
    })
     
    return (
      <div>SpeechCommands
        <label>
          <span>Recognize</span>
          <Switch checked={this.props.is_on} onChange={ () => {this.handleOnOrOff()} }/>
        </label>
        <button className='recognize' onClick={ () => {this.recognize()}}>Recognize</button>
        <ul>
        {listItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    words: state.speech.words,
    highlighted: state.speech.highlighted,
    is_on: state.speech.is_on
  }
}

export default connect(mapStateToProps)(Speech)
