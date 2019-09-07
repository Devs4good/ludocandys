import React, { Component } from "react";
import Exercise from "../../../components/Exercise";
import micIcon from './microphone-solid.svg';
import './styles.css';

class Game1 extends Component {
  onMicClicked = () => {};

  render() {
    return (
      <div>
        <Exercise title={"EJERCICIO1"}>
          <div className="speech-reco-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </div>
          <div><button onClick={this.onMicClicked}><img src={micIcon}/></button></div>
        </Exercise>
      </div>
    );
  }
};

export default Game1;
