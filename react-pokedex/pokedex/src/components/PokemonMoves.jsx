import React, { useState, useEffect } from 'react';

function PokemonMoves({pokemonId}) {

    const [pokemonData, setPokemonData] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
                  .then(res => res.json())
                  .then(data => {
                      setPokemonData(data);
                      return data;
                  });
  
              setPokemonData(response);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, [pokemonId]);
  

    return (
      pokemonData ? (
          <div>
              <p>{pokemonData.name}'s moves:</p>
              <ul>
                  {pokemonData.moves.map((move, index) => {
                      return <li key={index}>{move.move.name}</li>;
                  })}
              </ul>
          </div>
      ) : null
  );
}

export default PokemonMoves;