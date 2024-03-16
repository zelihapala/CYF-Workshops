import React, { useState } from 'react';




const PokemonCity = () =>{
 const [city, setCity] = useState('')

const updateCity= (event) => {
    setCity(event.target.value);
}


 return (
    <div>
        
        <input type='text' value = {city} onChange={updateCity}/>
        <p>{city}</p>
    </div>
 )
}
export default PokemonCity;