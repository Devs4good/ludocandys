import React, { Component } from 'react';
import './styles.css';

function Exercise({ title, children}) {
  return (
    <div className="speech-recognition-container">
      <div className="speech-recognition-title">{title}</div>
      <div className="exercise-container">
        <div className="speech-reco-text-container">
          {children}
        </div>
        <div className="speech-reco-points-container">
          <div className="speech-reco-points-title">PUNTOS</div>
          <div className="speech-reco-points">0</div>
          <div><button>PROXIMO EJERCICIO</button></div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
