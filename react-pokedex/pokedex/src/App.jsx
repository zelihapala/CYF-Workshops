import React from "react";

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  return <p>Caught 0 Pokemon on {date}</p>;
}

function Logo() {
  const appName = "Zeliha's Pokedex";
  return (
    <div>
      <header>
        <h1>Welcome to {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
          alt="Pokedex Logo"
        />
      </header>
    </div>
  );
}

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    // <div>
    //   <p>My favorite Pokemon is Squirtle</p>
    //   <p>Abilities: {abilities.join(', ')}</p>
    // </div>
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        Abilities:
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
