import React from 'react';

import pokemons from '../../database/data';

import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        const pokemonsArr = pokemons.map(pokemon => {
            return (
                <li id="pokemon-wrapper">
                    <img src={pokemon.image} alt={pokemon.name}/>
                    <h3>{ pokemon.name }</h3>
                    <p id="type">{ pokemon.type }</p>
                    <p>{ pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
                </li>
            );
        });
        return (
            <ul className="container">
                { pokemonsArr }
            </ul>
        );
    }
}

export default Pokemon;