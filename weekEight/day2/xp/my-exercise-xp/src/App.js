import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'
import React from 'react'
import Phone from './Components/Phone';
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <Car name={carinfo.name} model={carinfo.model}/>
      <Phone />
    </div>
  );
}



export default App;
