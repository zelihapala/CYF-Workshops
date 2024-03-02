import React from "react";

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
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

export default BestPokemon;
