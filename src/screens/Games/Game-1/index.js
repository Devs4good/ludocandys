import React, { useEffect, useState } from 'react';

/* Components */
import Exercise from '../../../components/Exercise';
import Speak from '../../../components/SpeakComponent/Speak';
/* Assets */
import micIcon from './microphone-solid.svg';
import stopIcon from './stop-solid.svg';
import './styles.css';
/* Utils */
import removeAccents from '../../../utils/accents';

const phrasesPreloaded = {
  1: { id: '1', text: 'La masa blanca estaba blanda', didWin: null },
  2: { id: '2', text: 'La paloma se poso en el palo', didWin: null },
};

const QueLees = () => {
  const [phrases, setPhrases] = useState(phrasesPreloaded);
  console.log('TCL: QueLees -> phrases', phrases);
  const [chosenPhrase, setChosenPhrase] = useState(phrases[randomPhrase()]);
  console.log('TCL: QueLees -> chosenPhrase', chosenPhrase);

  function randomPhrase() {
    const number = Math.floor(Math.random() * Object.keys(phrasesPreloaded).length + 1);
    return number;
  }

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

    const resultPara = document.querySelector('.result');
    const testBtn = document.querySelector('.start-button');

    function testSpeech() {
      testBtn.disabled = true;
      testBtn.textContent = 'Prueba en progreso';

      let phrase = chosenPhrase.text.toLowerCase();
      resultPara.textContent = 'Bien o mal?';
      resultPara.style.background = 'rgba(0,0,0,0.2)';

      const grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + chosenPhrase + ';';
      const recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();

      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      recognition.lang = 'es-ES';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        console.log('TCL: recognition.onresult -> speechResult', speechResult);

        if (removeAccents(speechResult) === phrase.toLowerCase()) {
          resultPara.textContent = 'Todo estuvo OK!!';
          resultPara.style.background = 'lime';
          setPhrases(prevPhrases => ({
            ...prevPhrases,
            [chosenPhrase.id]: { ...prevPhrases[chosenPhrase.id], didWin: true },
          }));

          Speak('Felicitaciones sumaste 5 puntos');
        } else {
          setPhrases(prevPhrases => ({
            ...prevPhrases,
            [chosenPhrase.id]: { ...prevPhrases[chosenPhrase.id], didWin: false },
          }));
          Speak('Buuuu!');

          resultPara.textContent = 'Mmmm... Uff... Mal.';
          resultPara.style.background = 'red';
        }
      };

      recognition.onspeechend = function() {
        testBtn.disabled = false;
        testBtn.textContent = 'Empezar nuevo test';
        setChosenPhrase(prevState => phrases[randomPhrase()]);
      };
    }

    testBtn.addEventListener('click', testSpeech);
  });

  return (
    <div className='game-container'>
      <div className='container'>
        <Exercise title={'EJERCICIO1'}>
          <div className='speech-reco-text'>{chosenPhrase.text}</div>

          <div>
            <button onClick={() => {}} className='start-button'>
              <img src={micIcon} />
            </button>

            <div>
              <p className='result'>Bien o mal?</p>
            </div>
          </div>
        </Exercise>
      </div>
    </div>
  );
};

export default QueLees;
