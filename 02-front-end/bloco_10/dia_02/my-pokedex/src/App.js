import React from 'react';

import pokemons from './database/data';
import Pokemon from './components/Pokemon/Pokemon';
import Pokedex from './components/Pokedex/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;