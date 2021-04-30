import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleName = this.handleName.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
    this.state = {
      song: '',
      name: '',
      number: 0,
      history: '',
    }
  }

  handleName(event) { 
    this.setState({
      name: event.target.value,
    })
  }

  handleSong(event) { 
    this.setState({
      song: event.target.value,
    })
  }

  handleHistory(event) { 
    this.setState({
      history: event.target.value,
    })
  }

  handleNumber(event) { 
    this.setState({
      number: event.target.value,
    })
  }

  render() {
    return (
      <div className="form-container">
        <select name="select" id="select" value={this.state.song} onChange={this.handleSong}>
          <option value="k-pop">K-Pop</option>
          <option value="rock">Rock</option>
          <option value="blues">Blues</option>
        </select>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" value={this.state.name} onChange={this.handleName}/>
        </label>
        <label htmlFor="number">
          Numero:
          <input type="number" id="number" value={this.state.number} onChange={this.handleNumber}/>
        </label>
        <label htmlFor="your-history">
          <textarea 
            name="your-history" 
            id="your-history" 
            cols="30" rows="10" 
            value={this.state.history} 
            onChange={this.handleHistory}>
          </textarea>
        </label>
      </div>
    );
  }
}

export default Form;