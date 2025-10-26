import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-4xl font-bold text-blue-600">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl underline text-red-500">
          Welcome to Tailwind CSS with React and TypeScript!
        </h1>

        <div className="p-4 m-4 text-blue-800 bg-red-400" >
          railway koduru
          <p className="text-sm truncate">A passionate railway enthusiast .</p>
          </div>

      </header>
      <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src={logo} />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span>The Anti-Patterns</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>

    </div>
  );
}

export default App;
