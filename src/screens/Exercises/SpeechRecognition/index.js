import React, { Component } from 'react';
import './styles.css';
import micIcon from './microphone-solid.svg';

class SpeechRecognition extends Component {
  onMicClicked = () => {};

  render() {
    return (
      <div className="speech-recognition-container">
        <div className="speech-recognition-title">EJERCICIO 1</div>
        <div className="exercise-container">
          <div className="speech-reco-text-container">
            <div className="speech-reco-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </div>
            <div><button onClick={this.onMicClicked}><img src={micIcon}/></button></div>
          </div>
          <div className="speech-reco-points-container">
            <div className="speech-reco-points-title">PUNTOS</div>
            <div className="speech-reco-points">0</div>
            <div><button>PROXIMO EJERCICIO</button></div>
          </div>
        </div>
      </div>
    );
  }
}
export default SpeechRecognition;
