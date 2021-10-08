import React from 'react';
import PropTypes from 'prop-types';

import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemons;

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

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;