import React, { Component } from 'react';
import './FormDadosPessoais.css';

class InputCpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input 
        type="text" 
        name="cpf" 
        value={value} 
        onChange={handleChange} 
        maxLength="11" 
        required 
      />
    );
  }
}

export default InputCpf;