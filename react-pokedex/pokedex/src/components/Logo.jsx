import React from "react";

function Logo() {
  const appName = "Zeliha's Pokedex";

  function logWhenClicked() {
    console.log("Logo clicked!"); 
  }

  return (
    <div>
      <header>
        <h1>Welcome to {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
          alt="Pokedex Logo"
          onClick={logWhenClicked}
        />
      </header>
    </div>
  );
}

export default Logo;
