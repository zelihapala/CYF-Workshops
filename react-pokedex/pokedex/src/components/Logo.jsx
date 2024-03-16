import React from "react";
import "./Logo.css"



function Logo({ handleClick }) {
  const appName = "Zeliha's Pokedex";

  return (
    <div>
      <header>
        <h1>Welcome to {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokedex Logo"
          onClick={handleClick} 
        />
      </header>
    </div>
  );
}

export default Logo;