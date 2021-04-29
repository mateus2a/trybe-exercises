import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      numberThree: 0,
    }
  }

  handleButtonOne() {
    this.setState((beforeState, _props) => ({
      numberOne: beforeState.numberOne + 1,
    }));
  }

  handleButtonTwo() {
    this.setState((beforeState, _props) => ({
      numberTwo: beforeState.numberTwo + 2,
    }));
  }

  handleButtonThree() {
    this.setState((beforeState, _props) => ({
      numberThree: beforeState.numberThree + 3,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonOne}>{this.state.numberOne}</button>
        <button onClick={this.handleButtonTwo}>{this.state.numberTwo}</button>
        <button onClick={this.handleButtonThree}>{this.state.numberThree}</button>
      </div>
    );
  }
}

export default App;