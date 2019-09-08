import React from 'react';
import { Link } from 'react-router-dom';
import './GameOption.css';

export const GameOption = ({to, src, alt, children}) => (
  <Link to={to}>
    <div className="game-option">
      <img src={src} alt={alt}/>
      { children }
    </div>
  </Link>
);
