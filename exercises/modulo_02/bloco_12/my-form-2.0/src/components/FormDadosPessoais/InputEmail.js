import React, { Component } from 'react';
import './FormDadosPessoais.css';

class InputEmail extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input 
        type="text" 
        name="email" 
        value={value}  
        onChange={handleChange} 
        maxLength="50" 
        required 
      />
    );
  }
}

export default InputEmail;