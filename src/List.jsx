import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import SelectedTypeContext from "./context/SelectedTypeContext";
import fetchTypes from "./data/fetchTypes";

const List = () => {
  const [selectedType] = useContext(SelectedTypeContext);
  const results = useQuery(["pokemonList", selectedType], fetchTypes);
  
  if (results?.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pokemonList = results.data.pokemon?.map(res => {
    const pokemon = res.pokemon;
    const index = pokemon.url.split('pokemon/')[1].split('/')[0];
    return {
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
    }
  });
  console.log(pokemonList);
  
  return (
    <div className="pokemon-list-container">
      <div className="container">
        <h2>Pokémon List</h2>
        <ul>
            {
              pokemonList?.length ? pokemonList.map(pokemon => (
                <li key={pokemon.name}>
                  <img src={pokemon.img} alt="Squirtle" />
                  <h3>{pokemon.name}</h3>
                </li>
              )) : 'No type selected'
            }
        </ul>
      </div>
    </div>
  );
}

export default List;