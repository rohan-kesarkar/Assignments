import './App.css';
import React,{useState} from 'react';
import Child from './component/Child';
import CurrentDate from './component/CurrentDate';
import Lists from './component/Lists';

function App() {
  const [message] = useState("Welcome to TechMojo")
  return (
    
    <div className="App">
      <Child state={'Default'}/>
      <Child state={'Bar'}/>
      <Child state={'foo'}/>
      <div>
        <h3>What is current date?</h3>
        <CurrentDate date = {Date()} />
      </div>
      <div>
        <p>{message}</p>
      </div>
      <div>
        <h1>To Do List</h1>
        <h2>Today</h2>
        <Lists tasks = {["Walk ", "Cook ", "Bake "]}/>
        <h2>Tomorrow</h2>
        <Lists tasks = {["Study ", "Code ", "Eat "]}/>
        <h4></h4>
      </div>
    </div>
  );
}

export default App;
