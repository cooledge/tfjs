import React, {Component} from 'react';
//import { mobilenet } from '@tensorflow-models/mobilenet';
import { connect } from 'react-redux'
import { setWords, highlightWord, turnOn, turnOff } from '../actions/actions'
import Switch from "react-switch";

class Vision extends Component {
  constructor(props) {
    super(props)
/*
    this.net = mobilenet.load().then( function() {
      console.log("Loaded mobilenet successfully");
    });
*/
  }

  recognize() {
  }

  stop() {
  }

  handleOnOrOff(checked) {
    if (checked) {  
      this.props.dispatch(turnOn());
    }
    else {
      this.props.dispatch(turnOff());
    }
     
  }

  async setupWebcam() {
    const webcamElement = document.getElementById('webcam');
    return new Promise((resolve, reject) => {
      const navigatorAny = navigator;
      navigator.getUserMedia = navigator.getUserMedia ||
          navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
          navigatorAny.msGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true},
          stream => {
            webcamElement.srcObject = stream;
            webcamElement.addEventListener('loadeddata',  () => resolve(), false);
          },
          error => reject());
      } else {
        reject();
      }
    });
  }

  render() {
    return (
      <div>Vision
        <video autoPlay playsInline muted id="webcam" width="224" height="224"></video>
        <button onClick={() => this.setupWebcam()}>Get Webcam image</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Vision)
