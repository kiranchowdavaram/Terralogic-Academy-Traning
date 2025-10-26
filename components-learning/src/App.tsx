import React from 'react';

import './App.css';
import ButtonOnClick from './button';
import Counter from './IncrementComponent';
import ClassCounter from './MyClassComponent';
import DataBindingComponent from './DataBindingComponent';
import ParentComponent from './ParentComponent';
import WelcomeMessage, { Greeting } from './WelcomeMessage';
import ConditionalRendering from './ConditionRendering';
import ListUsage from './ListUsage';
import ArrayTraversal from './ArrayTraversal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <ButtonOnClick/>
      <Counter/>
      <ClassCounter/>
      <DataBindingComponent/>
      <ParentComponent/>
      <WelcomeMessage isLoggedin={false}/>
      <Greeting isLoggedin={true} isAuthorized={false}/>     
      <Greeting isLoggedin={false} isAuthorized={false}/>     
      <Greeting isLoggedin={true} isAuthorized={true}/> 
      <ConditionalRendering isLoggedin ={true}/>      
      <ListUsage/>
      <ArrayTraversal/> 
      </header>
    </div>
  );
}

export default App;
