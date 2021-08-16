import React from 'react';
import './App.css';
import Button from './Components/Button';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]
    }
      
  }
  

  plusOne = (index) => {
    
    let newLanguages = this.state.languages
    newLanguages[index].votes ++
    this.setState({languages: newLanguages})
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.languages.map((item, index) =>{
              
              return <Button func={() => this.plusOne(index)} name={item.name} votes={item.votes}/>
            })
          }
          
        </header>
      </div>
    );
  }
}
export default App;