import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.isPair = this.isPair.bind(this);
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      numberThree: 0,
    }
  }

  isPair(number) {
    if (number % 2 !== 0) {
      document.querySelector('.btnOne').style.background = 'green';
      console.log('green');
    } else {
      document.querySelector('.btnOne').style.background = '#efefee';
    }
  }

  handleButtonOne() {
    this.setState((beforeState, _props) => ({
      numberOne: beforeState.numberOne + 1,
    }));

    this.isPair(this.state.numberOne);
  }

  handleButtonTwo() {
    this.setState((beforeState, _props) => ({
      numberTwo: beforeState.numberTwo + 2,
    }));
    
    this.isPair(this.state.numberTwo);
  }

  handleButtonThree() {
    this.setState((beforeState, _props) => ({
      numberThree: beforeState.numberThree + 3,
    }));

    this.isPair(this.state.numberThree);
  }

  render() {
    return (
      <div>
        <button className="btnOne" onClick={this.handleButtonOne}>{this.state.numberOne}</button>
        <button onClick={this.handleButtonTwo}>{this.state.numberTwo}</button>
        <button onClick={this.handleButtonThree}>{this.state.numberThree}</button>
      </div>
    );
  }
}

export default App;