import React from 'react';
import { games } from '../../data/games';
import GameCard from '../../components/GameCard/GameCard';

const Home = () => {
  const manualGames = games.map(game => ({
    ...game,
    files: game.files.filter(file => file.type === 'manual'),
  })).filter(game => game.files.length > 0);

  const extraGames = games.map(game => ({
    ...game,
    files: game.files.filter(file => file.type === 'extra'),
  })).filter(game => game.files.length > 0);

  return (
    <div>
      <section className="game-section">
        <h2>Manuals</h2>
        <div className="game-grid">
          {manualGames.map(game => (
            game.files.map(file => (
              <GameCard key={`${game.id}-${file.name}`} game={game} file={file} />
            ))
          ))}
        </div>
      </section>

      <section className="game-section">
        <h2>Extras</h2>
        <div className="game-grid">
          {extraGames.map(game => (
            game.files.map(file => (
              <GameCard key={`${game.id}-${file.name}`} game={game} file={file} />
            ))
          ))}
        </div>
      </section>

      <section className="game-section">
        <h2>Tools</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
};

export default Home;
