import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.bomDia = this.bomDia.bind(this);
    this.boaTarde = this.boaTarde.bind(this);
    this.boaNoite = this.boaNoite.bind(this);
    console.log('Constructor');
  }

  bomDia() {
    return console.log('Bom dia');
  }
  
  boaTarde() {
    return console.log('Boa Tarde');
  }
  
  boaNoite() {
    return console.log('Boa Noite');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.bomDia}>Bom Dia</button>
        <button onClick={this.boaTarde}>Boa Tarde</button>
        <button onClick={this.boaNoite}>Boa Noite</button>
      </div>
    );
  }
}

export default App;
