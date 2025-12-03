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
    <main class="page-content">
      <section className="game-section">
        <h1>Manuals</h1>
        <div className="game-grid">
          {manualGames.map((game) => (
            <GameCard key={game.id} game={game} fileType="manual" />
          ))}
        </div>
        <section className="divider" />

        <h1>Extras</h1>
        <div className="game-grid">
          {extraGames.map((game) => (
            <GameCard key={game.id} game={game} fileType="extra" />
          ))}
        </div>

        <section className="divider" />

        <h1>Tools</h1>
        <p>Coming soon...</p>
      </section>
    </main>
  );
};

export default Home;
