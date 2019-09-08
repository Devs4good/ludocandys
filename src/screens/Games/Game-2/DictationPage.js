import React from 'react';
import './DictationPage.css';
import spellingIcon from './spellingIcon.jpg';
import soundIcon from './soundIcon.jpg';
import ExercisesRepository from '../../../models/ExercisesRepository';
import Speak from '../../../components/SpeakComponent/Speak';
import SpeechComparer from '../../../models/SpeechComparer';

export class DictationPage extends React.Component {
  constructor(props) {
    super(props);
    const exerciseId = 1;

    this.state = {
      exercise: ExercisesRepository.exercises()[exerciseId],
      previousExercise: false,
      exerciseId,
      score: 0,
    };
  }

  correct(exercise) {
    const result = SpeechComparer.compare(exercise, this.state.userInput);

    if (result.hasMatches) {
      Speak('Has ganado cinco puntos');
      this.setState({ score: result.score });
    } else {
      Speak('La cantidad de palabras no coincide');
    }
  }

  goToNextExercise() {
    const { exerciseId } = this.state;
    const { history } = this.props;

    if (exerciseId === 2) history.push('/juegos/que-ves/1');

    this.setState({
      exercise: ExercisesRepository.exercises()[2],
      userInput: '',
      previousExercise: true,
      exerciseId: 2,
    });
  }

  onTextInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { score, exercise, userInput, exerciseId, previousExercise } = this.state;

    return (
      <div id='dictation-page'>
        <div className='dictation-exercise'>
          <div className='dictation-exercise-title'>EJERCICIO #{exerciseId}</div>
          <div className='dictation-exercise-icons'>
            <img src={soundIcon} alt='Reproducir' onClick={() => Speak(exercise)} />
            <img src={spellingIcon} alt='Corregir' onClick={() => this.correct(exercise)} />
          </div>
          <textarea onChange={this.onTextInput.bind(this)} name='userInput' value={userInput} cols='30' rows='10' />
        </div>
        <div className='dictation-score'>
          <div className='dictation-score-title'>PUNTOS</div>
          <div className='dictation-score-number'>{score}</div>
          <div className='dictation-score-button'>
            <button onClick={() => this.goToNextExercise()}>Proximo Ejercicio</button>
          </div>
        </div>
      </div>
    );
  }
}
