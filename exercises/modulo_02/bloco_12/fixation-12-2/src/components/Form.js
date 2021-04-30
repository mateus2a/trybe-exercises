import React, { Component } from 'react'
import NumberOfGuest from './NumberOfGuest';
import File from './File';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      file: '',
      formWithErrors: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Form</legend>
        <label>
          Estão indo:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />

        <NumberOfGuest 
          value={this.state.numberOfGuests} 
          handleInputChange={this.handleInputChange}
        />

        <File 
          value={this.state.file} 
          handleInputChange={this.handleInputChange}
        />
        </fieldset>
      </form>
    );
  }
}


export default Form;