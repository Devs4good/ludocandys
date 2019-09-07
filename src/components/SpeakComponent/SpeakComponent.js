import React, { Component } from 'react';
import './masInfo.css';
import Speak from "./Speak";

class SpeakComponent extends Component {
  constructor(props) {
    super(props);
  }

  callToSpeak() {
    Speak("La paloma se posó en el palo");
  }

  render() {
    return (
      <div className="pagina">
        <div className="botones">
          <button onClick={() => this.callToSpeak()}>
            Hablar
          </button>
        </div>
      </div>
    );
  }
}

export default SpeakComponent;