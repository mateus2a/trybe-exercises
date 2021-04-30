import React, { Component } from 'react';
import FormDadosPessoais from './components/FormDadosPessoais/FormDadosPessoais';
import FormUltimoEmprego from './components/FormUltimoEmprego/FormUltimoEmprego';

class App extends Component {
  render() {
    return(
      <form action="#">
        <fieldset className="dados-pessoais">
          <FormDadosPessoais />
        </fieldset>

        <fieldset className="ultimo-emprego">
          <FormUltimoEmprego />
        </fieldset>

      </form>
    );
  }
}

export default App;
