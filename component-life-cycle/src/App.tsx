import React from 'react';
import './App.css';
import PostList from './postlist';
// import LifecycleDemo from './classLifecycleDemo';
// import FunctionalLifeCycleDemo from './FuntionalLifeCycleDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <LifecycleDemo/>
      <FunctionalLifeCycleDemo/> */}
      <PostList/>
      </header>
    </div>
  );
}

export default App;
