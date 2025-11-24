import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game, file }) => {
  const pdfPath = `/pdf-viewer?file=${file.path}`;

  return (
    <div className="game-card">
      <Link to={pdfPath} target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <h3>{game.name}</h3>
          <p>{file.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
