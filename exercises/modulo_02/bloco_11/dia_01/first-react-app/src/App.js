import tick from './tick';
import './App.css'

function App() {
  const textJSX = 'Hello, JSX';
  return (
    <div className="App">
      <header className="App-header">
        <h1>{textJSX}</h1>
        <p>{tick}</p>
      </header>
    </div>
  );
}

export default App;
