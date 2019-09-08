import React, { useEffect, useState } from "react";

/* Components */
// import Exercise from '../../../components/Exercise';
import Speak from "../../../components/SpeakComponent/Speak";
/* Assets */
import micIcon from "./microphone-solid.svg";
// import stopIcon from './stop-solid.svg';
import "./styles.css";
/* Utils */
import removeAccents from "../../../utils/accents";

const phrasesPreloaded = {
  1: { id: "1", text: "Un barco chico navega por el mar", didWin: null },
  2: { id: "2", text: "La paloma se poso en el palo", didWin: null }
};

const QueLees = ({ history }) => {
  const [points, setPoints] = useState(0);
  const [phrases, setPhrases] = useState(phrasesPreloaded);
  const [chosenPhrase, setChosenPhrase] = useState(phrases[1]);
  const [canTalk, setCanTalk] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const testBtn = document.querySelector(".start-button");
    let didWinCurrentPhrase = null;

    function testSpeech() {
      testBtn.disabled = true;
      testBtn.textContent = "Prueba en progreso";

      let phrase = chosenPhrase.text.toLowerCase();

      const grammar =
        "#JSGF V1.0; grammar phrase; public <phrase> = " + chosenPhrase + ";";
      const recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();

      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      recognition.lang = "es-ES";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onstart = function() {
        setCanTalk(true);
      };

      recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        console.log("TCL: recognition.onresult -> speechResult", speechResult);

        if (removeAccents(speechResult) === phrase.toLowerCase()) {
          setPhrases(prevPhrases => ({
            ...prevPhrases,
            [chosenPhrase.id]: { ...prevPhrases[chosenPhrase.id], didWin: true }
          }));

          setPoints(prevPoints => prevPoints + 5);
          Speak("Felicitaciones sumaste 5 puntos");
          didWinCurrentPhrase = true;
        } else {
          setPhrases(prevPhrases => ({
            ...prevPhrases,
            [chosenPhrase.id]: {
              ...prevPhrases[chosenPhrase.id],
              didWin: false
            }
          }));
          Speak("Prueba de nuevo!");
          didWinCurrentPhrase = false;
        }
      };

      recognition.onspeechend = function() {
        testBtn.disabled = false;
        testBtn.textContent = "Empezar nuevo test";
        setCanTalk(false);
        console.log(
          "TCL: recognition.onspeechend -> didWinCurrentPhrase",
          didWinCurrentPhrase
        );

        setTimeout(() => {
          if (didWinCurrentPhrase) {
            const nextPhrase = phrases[Number(chosenPhrase.id) + 1];
            if (!nextPhrase) history.push("dictado");
            setChosenPhrase(nextPhrase);
          }

          didWinCurrentPhrase = null;
        }, 400);
      };
    }

    testBtn.addEventListener("click", testSpeech);
  });

  const goToNextExercise = () => {
    const nextPhrase = phrases[Number(chosenPhrase.id) + 1];
    if (!nextPhrase) history.push('dictado');
    setChosenPhrase(nextPhrase);
  }

  const goToPreviousExercise  = () => {
  }

  return (
    <div id="dictation-page" className="speech-page">
      <div className="dictation-exercise speech-exercise">
        <header>
          <h2>Decí lo que lees</h2>
          <h3>Ejercicio {chosenPhrase.id}</h3>
        </header>

        <div className="speech-reco-text">{chosenPhrase.text}</div>

        <div>
          <button onClick={() => {}} className="start-button">
            <img src={micIcon} alt="" />
          </button>
          {canTalk && <p>Puedes empezar a hablar</p>}
        </div>
      </div>

      <div className='dictation-score speech-score'>
          <div className='dictation-score-title'>PUNTOS</div>
          <div className='dictation-score-number'>{points}</div>
          <div className='dictation-score-button'>
            <button onClick={() => goToNextExercise()}>Proximo Ejercicio</button>
          </div>
        </div>
    </div>
  );
};

export default QueLees;
