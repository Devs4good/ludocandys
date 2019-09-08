import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div>
      <Link to='/juegos/que-ves'>
        <button>Decí lo que lees</button>
      </Link>
      <Link to='/juegos/dictado'>
        <button>Escribí lo que escuchás</button>
      </Link>
      <Link to='/juegos/que-ves/1'>
        <button>Seleccioná lo que ves</button>
      </Link>
    </div>
  );
};

export default Games;
