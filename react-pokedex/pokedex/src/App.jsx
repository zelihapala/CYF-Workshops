import React from 'react';
import Logo from './components/Logo';
import BestPokemon from './components/BestPokemon';
import CaughtPokemon from './components/CaughtPokemon';

function logWhenClicked() {
  console.log("Logo clicked!"); 
}

function App() {
  return (
    <div>
      <Logo logWhenClicked={logWhenClicked}/>
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}


export default App;
