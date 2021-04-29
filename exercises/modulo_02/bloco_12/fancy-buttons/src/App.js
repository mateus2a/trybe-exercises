import React from 'react';

function bomDia() {
  return console.log('Bom dia');
}

function boaTarde() {
  return console.log('Boa Tarde');
}

function boaNoite() {
  return console.log('Boa Noite');
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={bomDia}>Bom Dia</button>
        <button onClick={boaTarde}>Boa Tarde</button>
        <button onClick={boaNoite}>Boa Noite</button>
      </div>
    );
  }
}

export default App;
