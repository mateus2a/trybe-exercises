import React, { Component } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCpf from './InputCpf';
import ComboBox from './ComboBox';

import './FormDadosPessoais.css';

class FormDadosPessoais extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: false,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  
  render() { 

    return ( 
      <form action="#">
        <InputName value={this.state.name} handleChange={this.handleChange} />
        <InputEmail value={this.state.email} handleChange={this.handleChange} />
        <InputCpf value={this.state.cpf} handleChange={this.handleChange} />
        <input type="text" name="address" value={this.state.address}  onChange={this.handleChange} maxLength="200" required/>
        <input type="text" name="city" value={this.state.city}  onChange={this.handleChange} maxLength="40" required/>
        <ComboBox value={this.state.state} handleChange={this.handleChange} />
        <input type="checkbox" name="type" value={this.state.type}  onChange={this.handleChange} />
      </form>
     );
  }
}
 
export default FormDadosPessoais;