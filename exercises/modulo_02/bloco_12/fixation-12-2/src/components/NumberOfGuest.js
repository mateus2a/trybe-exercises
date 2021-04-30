import React, { Component } from 'react';

class NumberOfGuest extends Component {
  render() { 
    const { value, handleInputChange } = this.props;

    let error = undefined;
    if (value > 25) error = 'Numero muito grande';

    return ( 
      <label>
      Número de convidados:
        <input
          name="numberOfGuests"
          type="number"
          value={value}
          onChange={handleInputChange} 
        />
        
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}
 
export default NumberOfGuest;