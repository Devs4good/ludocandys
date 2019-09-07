import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>
      <Link to="/games/game-1">
        <button>Decí lo que lees</button>
      </Link>
      <Link to="/games/game-2">
        <button>Escribí lo que escuchás</button>
      </Link>
      <Link to="/games/game-3">
        <button>Seleccioná lo que ves</button>
      </Link>
    </div>
  );
};

export default Games;
