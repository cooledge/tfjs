import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import Speech from './components/Speech'
import { Provider } from 'react-redux';
import store from './stores/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Speech></Speech>
          <header className="App-header">
            <div id="console"></div>
            <script src="tfindex.js"></script>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
