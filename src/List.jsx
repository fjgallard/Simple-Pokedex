const List = () => {

  return (
    <div className="pokemon-list-container">
      <div className="container">
        <h2>Pokémon List</h2>
        <ul>
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
                <h3>Bulbasaur</h3>
            </li>
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" />
                <h3>Charmander</h3>
            </li>
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" />
                <h3>Squirtle</h3>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default List;