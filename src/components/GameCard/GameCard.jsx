import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({ game, fileType }) => {
  const coverImage = game?.files?.find((file) => file.type === "cover")?.path;
  const filesToList = game?.files?.filter((file) => file.type === fileType);

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img className="img" src={coverImage} alt={`${game.name} Cover`} />
            <h3 className="title">{game.name}</h3>
          </div>
        </div>
        <div className="front">
          <div className="front-content">
            {filesToList.map((file) => (
              <h3 key={file.id} className="title">
                <a href={file.path} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
