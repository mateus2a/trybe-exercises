import React from 'react';

import pokemons from '../../database/data';

import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <ul className="container">
                <li id="pokemon-wrapper">
                    <img src={image} alt={name}/>
                    <h3>{ name }</h3>
                    <p id="type">{ type }</p>
                    <p id="peso">{ averageWeight.value } { averageWeight.measurementUnit }</p>
                </li>
            </ul>
        );
    }
}

export default Pokemon;