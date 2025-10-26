import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent';
import TestComponemt from './TestComponemt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Saikiran</p>
        <DemoComponent/>
          Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
