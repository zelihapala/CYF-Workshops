import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PokemonInfo() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, color, shape, base_happiness, capture_rate } = pokemon;

  return (
    <div>
      <h2>Pokemon Info</h2>
      <p>Name: {name}</p>
      <p>Color: {color.name}</p>
      <p>Shape: {shape.name}</p>
      <p>Base Happiness: {base_happiness}</p>
      <p>Capture Rate: {capture_rate}</p>
    </div>
  );
}