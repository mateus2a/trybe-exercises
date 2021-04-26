import React from 'react';

import pokemons from '../../database/data';

import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        const pokemonsArr = pokemons.map(pokemon => {
            return (
                <main className="container">
                    <div id="pokemon-wrapper">
                        <img src={pokemon.image} alt={pokemon.name}/>
                        <h3>{ pokemon.name }</h3>
                        <p id="type">{ pokemon.type }</p>
                        <p>{ pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
                    </div>
                </main>
            );
        });
        return (
            <h1>{ pokemonsArr }</h1>
        );
    }
}

export default Pokemon;