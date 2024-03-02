import React from "react";
import "./Logo.css"



function Logo({logWhenClicked}) {
  const appName = "Zeliha's Pokedex";



  return (
    <div>
      <header>
        <h1>Welcome to {appName}</h1>
        <img
          src="https://t.ly/E4L-r"
          alt="Pokedex Logo"
          onClick={logWhenClicked}
         
        />
      </header>
    </div>
  );
}

export default Logo;
