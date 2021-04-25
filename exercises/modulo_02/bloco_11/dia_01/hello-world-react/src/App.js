import react from 'react';

const commitmentsArr = ['Estudar Inglês', 'Estudar Programação', 'Estudar React'];

const task = () => {
  let commitments = commitmentsArr.map((el) => {
    return (<li>{el}</li>);
  });
  return commitments;
}

function App() {
  return (
    <div className="App">
      { task() }
    </div>
  );
}

export default App;
