import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

import PokemonMovesSelector from "./components/PokemonMovesSelector";
import PokemonCity from "./components/PokemonCity";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  function logWhenClicked() {
    console.log("Logo clicked!");
  }
  return (
    <BrowserRouter>
      <div>
        <Logo handleClick={logWhenClicked} />
        <Link to="/best-pokemon" className="pokemon-link1">Best Pokemon</Link>
        <Link to="/caught-pokemon" className="pokemon-link2">Caught Pokemon</Link>
        <Routes>
          <Route path="/best-pokemon" element={<BestPokemon />} />
          <Route path="/caught-pokemon" element={<CaughtPokemon />} />
        </Routes>
        <PokemonMovesSelector />
        <PokemonCity />
      </div>
    </BrowserRouter>
  );
}


export default App;
