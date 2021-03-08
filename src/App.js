import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import Searchbar from './Searchbar';
import Pokemon from './Pokemon';


function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokeJson, setPokeJson] = useState(null);
  const [color, setColor] = useState(null);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (pokemon) {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((res) => {
          //console.log(pokemon)
          setPokeJson(res);
        })
        .catch((e) => {
          console.log(e);
          setIsValid(false);
        });

      axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pokemon)
        .then((res) => setColor(res))
        .catch((e) => console.log(e));
    }
  }, [pokemon]);



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(isValid);
  console.log(pokeJson);
  return (
    <div className='flex flex-col h-screen bg-red-500 '>
      <div>
        {pokeJson !== null ?
          <div>
            <h1 className={`flex justify-center text-4xl text-white font-roboto pt-5 ${pokeJson['data']['types'][0]['type']['name']}`}>{capitalizeFirstLetter(pokeJson['data']['name'])}</h1>
            <Pokemon json={pokeJson} name={pokemon} isValid={isValid} />
          </div> :
          <div className='mt-56'>
            <img src='logo.png' />
            <h2 className='flex justify-center mt-5 text-white font-sans'>Search by name or Pokedex number!</h2>
            {isValid === false ? <h1 className='flex justify-center text-white font-sans mt-10 text-2xl'>Invalid Pokemon, please try again!</h1> : null}
          </div>
        }
      </div>

      <div className='flex justify-center fixed inset-x-0 bottom-0 '>
        <Searchbar setPokemon={setPokemon} />
      </div>
    </div>
  );
}

export default App;
