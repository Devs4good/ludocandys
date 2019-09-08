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
      { text: 'elefante', isValid: true , id:1},
      { text: 'elafente', isValid: false, id:1 },
      { text: 'elefenta', isValid: false, id:1 },
      { text: 'alefente', isValid: false, id:1 },
      { text: 'elefnte', isValid: false, id:1 },
    ],
  },
  2: {
    id: 2,
    img:
      "https://www.savethekoala.com/sites/savethekoala.com/files/uploads/koala_donate.jpg",
    options: [
      { text: 'koala', isValid: true , id: 2},
      { text: 'kaola', isValid: false , id: 2},
      { text: 'klaoa', isValid: false , id: 2},
      { text: 'kalao', isValid: false , id: 2},
      { text: 'kaalo', isValid: false , id: 2},
    ],
  },
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
      const nextExercise = exercises[selectedOption.id + 1]
      console.log(nextExercise);
      if (!nextExercise) {
        props.history.push('/juegos/letra-correcta')
        return;
      }
      setTimeout(() => props.history.push(`/juegos/que-ves/${nextExercise.id}`), 1000);
    }
    //eslint-disable-next-line
  }, [selectedOption]);

  /*
    1. Si fallo lo ponemos en rojo
    2. Mostramos un toast y re-ordenamos el array
  */

  return (
    <div className='game-container'>
      <div className='container exercise-3'>
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
                    selectedOption.text === option.text ? (selectedOption.isValid === true ? 'valid' : 'invalid') : ''
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
