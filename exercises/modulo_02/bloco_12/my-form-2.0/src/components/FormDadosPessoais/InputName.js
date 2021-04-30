import React, { Component } from 'react';
import './FormDadosPessoais.css';

class InputName extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input 
        id="input-name" 
        type="text" 
        name="name" 
        value={value} 
        onChange={handleChange} 
        maxLength="40" 
        required 
      />
    );
  }
}

export default InputName;