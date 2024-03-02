import React, { useState } from "react";

function CaughtPokemon() {
  const [caught, setCaught] = useState([]);
  const date = new Date().toLocaleDateString();

  // Pokemon list
  const pokemonList = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Jigglypuff"];

  const catchPokemon = () => {
    //  random Pokemon
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];

    // Add the new Pokemon 
    setCaught([...caught, randomPokemon]);
  };

  return (
    <div>
      <p>Number of Caught Pokemon: {caught.length}</p>

      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <p>{date}</p>
    </div>
  );
}

export default CaughtPokemon;
