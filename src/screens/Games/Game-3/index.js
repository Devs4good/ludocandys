import React, { useState, useMemo, useEffect } from "react";
// import { Redirect } from 'react-router-dom';

/* Styles */
import "./styles.css";

const exercises = {
  1: {
    id: 1,
    img:
      "https://static.nationalgeographic.es/files/styles/image_470/public/2928.600x450.jpg",
    options: [
      { text: "elefante", isValid: true },
      { text: "elafente", isValid: false },
      { text: "elefenta", isValid: false },
      { text: "alefente", isValid: false },
      { text: "elefnte", isValid: false }
    ]
  },
  2: {
    id: 2,
    img:
      "https://www.savethekoala.com/sites/savethekoala.com/files/uploads/koala_donate.jpg",
    options: [
      { text: "koala", isValid: true },
      { text: "kaola", isValid: false },
      { text: "klaoa", isValid: false },
      { text: "kalao", isValid: false },
      { text: "kaalo", isValid: false }
    ]
  }
};

const Game3 = props => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log("TCL: selectedOption", selectedOption);

  const {
    match: {
      params: { id }
    }
  } = props;

  const selectedExcercise = useMemo(() => {
    if (!exercises[id]) return exercises[1];
    return {
      ...exercises[id],
      options: exercises[id].options.sort(() => 0.5 - Math.random())
    };
  }, [id]);

  useEffect(() => {
    if (selectedOption.isValid) {
      setTimeout(() => props.history.push("/juegos/que-ves/2"), 1000);
    }
    //eslint-disable-next-line
  }, [selectedOption]);

  /*
    1. Si fallo lo ponemos en rojo
    2. Mostramos un toast y re-ordenamos el array
  */

  return (
    <div className="game-container">
      <div className="container">
        <header>
          <h2>Selecciona lo que ves</h2>
          <h3>Ejercicio {id}</h3>
        </header>

        <div className="options-container">
          <div className="exercise-image">
            <img src={selectedExcercise.img} alt="-" />
          </div>

          <div className="exercise-options">
            {selectedExcercise.options.map(option => {
              return (
                <label
                  className={`exercise-option ${
                    selectedOption.text === option.text &&
                    selectedOption.isValid === true
                      ? "valid"
                      : "invalid"
                  }`}
                  key={option.text}
                >
                  {option.text}
                  <input
                    type="radio"
                    name={option.text}
                    value={option.text}
                    checked={selectedOption.text === option.text}
                    onChange={() => setSelectedOption(option)}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game3;
