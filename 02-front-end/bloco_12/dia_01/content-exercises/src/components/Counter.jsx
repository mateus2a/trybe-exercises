import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    this.setState({
      counter: 10
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter > 13 && nextState.counter < 15) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState + 1 === 13 || prevState + 1 === 15) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}