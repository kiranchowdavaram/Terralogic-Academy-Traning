import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Card from './card';
import ClassApp from './classcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:'flex'}}> 
          <Button name='chowdavaram'/>
        <Button name='venkat'/>
        <Button name='sai'/>
        <Button name='kiran'/>
        
        </div>
        <div style={{display:'flex'}}>
          <Card name='chowdavaram' age={24} course='MERN' company='Infosys'/>
          <Card name='venkat' age={25} course='MERN' company='TCS'/>
          <Card name='sai' age={23} course='MERN' company='Wipro'/>
          <Card name='kiran' age={26} course='MERN' company='HCL'/>
          <Card name='kiran' age={26} course='MERN' company='HCL'/>
        </div>
        <ClassApp />
      </header>
    </div>
  );
}

export default App;
