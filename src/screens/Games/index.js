import React from 'react';
import './juegos.css';
import deciLoQueLeesImage from './deci-lo-que-lees.svg';
import escribiLoQueEscuchasImage from './escribi-lo-que-escuchas.svg';
import seleccionaLoQueVes from './selecciona-lo-que-ves.svg';
import seleccionaLaLetraCorrecta from './selecciona-la-letra-correcta.svg';

import { GameOption } from '../../components/GameOption/GameOption';

const Games = () => {
  return (
    <div id="games-page">
      <div className="games-options">
        <GameOption to="/juegos/que-lees" src={deciLoQueLeesImage} alt="Decí lo que lees">
          Decí lo que lees
        </GameOption>
        <GameOption to="/juegos/dictado" src={escribiLoQueEscuchasImage} alt="Escribí lo que escuchás">
          Escribí lo que escuchás
        </GameOption>
        <GameOption to="/juegos/que-ves/1" src={seleccionaLoQueVes} alt="Seleccioná lo que ves">
          Seleccioná lo que ves
        </GameOption>
        <GameOption to="/juegos/que-ves/2" src={seleccionaLaLetraCorrecta} alt="Seleccioná la letra correcta">
          Seleccioná la letra correcta
        </GameOption>
      </div>
      <div className="games-description">
        Las siguientes actividades te ayudarán a entender la lectura y escritura de una manera más divertida para que mejores tu aprendizaje y no te aburras en el proceso.
      </div>
    </div>
  );
};

export default Games;
