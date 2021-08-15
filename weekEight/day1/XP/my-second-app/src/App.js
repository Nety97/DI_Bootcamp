import React from 'react';
import logo from './logo.svg';
// import './App.css';
const myelement = <h1>I Love JSX!</h1>;
const myelement2 = React.createElement('h1', {}, 'I do not use JSX!');

const myelement3 = <h1>React is {5 + 5} times better with JSX</h1>;
const listItems = <ul> <li>Coco</li> <li>Mango</li> <li>Passion Fruit</li></ul>
const object = {
  first_name: 'Bob',
  last_name: 'Dylan'
};
const animals = ['Horse','Turtle','Elephant','Monkey'];
const animals2 = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          
          <h2>{myelement2}</h2>
          <h2>{myelement}</h2>
            
            <div>
            {myelement3}
            </div>
            <h3>I am a Header.</h3>
            <h3>I am a Header too.</h3>
            
            <div>{listItems}</div>
            <input type='text' placeholder='Wait What?!'/>
            <p>My name is {object.first_name}</p>
            <p>My last name is {object.last_name}</p>

            {animals.map((item) =>{
              return <ul>
                      <li>{item}</li>
                    </ul>
            })}
            <br/>
            {animals2.map((item, i)=>{
              return <ul>
                      <li>{i+1} {item.label}</li>
                    </ul>
            })}

        </header>
      </div>
    </>
  );
}

export default App;
