import React from 'react';
import Pokemon from './pokemon';
import arrPokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        { arrPokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
      </div>
    )
  }
}

export default Pokedex