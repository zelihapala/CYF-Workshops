import React, { useState } from "react";

function CaughtPokemon() {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState(""); // New state for input value
  const date = new Date().toLocaleDateString();

  // Pokemon list
  const pokemonList = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Jigglypuff"];

  // Function to handle input changes
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  const catchPokemon = () => {
    // Prevent adding if input is empty
    if (pokemonNameInput.trim() !== "") {
      // Add the new Pokemon 
      setCaught([...caught, pokemonNameInput]); // Use pokemonNameInput from input field
      setPokemonNameInput(""); // Clear input field after catching
    }
  };

  return (
    <div>
      <p>Number of Caught Pokemon: {caught.length}</p>

      {/* Apply grid layout to the list of caught Pokemon */}
      <div className="caught-pokemon-list">
        {caught.map((pokemon, index) => (
          <span key={index}>{pokemon}</span>
        ))}
      </div>
      
      {/* Input field */}
      <input 
        type="text" 
        value={pokemonNameInput} // Set value to pokemonNameInput state variable
        onChange={handleInputChange} // Handle input changes
        placeholder="Enter Pokemon Name"
      />
      
      {/* Button to catch Pokemon */}
      <button onClick={catchPokemon}>Catch Pokemon</button>
      
      <p>{date}</p>
    </div>
  );
}

export default CaughtPokemon;
