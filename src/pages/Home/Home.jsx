import React from "react";
import { games } from "../../data/games";
import GameCard from "../../components/GameCard/GameCard";

const Home = () => {
  const manualGames = games.filter((gameWithManual) =>
    gameWithManual.files.some((file) => file.type === "manual")
  );

  const extraGames = games.filter((gameWithExtraMaterials) =>
    gameWithExtraMaterials.files.some((file) => file.type === "extra")
  );

  return (
    <div>
      <section className="game-section">
        <h2>Manuals</h2>
        <div className="game-grid">
          {manualGames.map((game) => (
            <GameCard key={game.id} game={game} fileType="manual" />
          ))}
        </div>
      </section>

      <section className="game-section">
        <h2>Extras</h2>
        <div className="game-grid">
          {extraGames.map((game) => (
            <GameCard key={game.id} game={game} fileType="extra" />
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
