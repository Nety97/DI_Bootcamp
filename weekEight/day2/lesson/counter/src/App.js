
import './App.css';
import React from 'react'
import Inputs from './Components/Inputs.js'
import Button from './Components/Button.js'
import Result from './Components/Result'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputOne: '',
      inputTwo: '',
      results: {}
    }

  }




  handleChange = (e) => {
    this.setState({inputOne: e.target.value})
  }

  handleChangeTwo = (e) => { 
    this.setState({inputTwo: e.target.value})
  }

  handleClick = ()=>{
    const{inputOne,inputTwo} = this.state
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${inputOne}&sname=${inputTwo}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5275be6f69msh01d5bbaae7d9411p110539jsn35dabcff143e",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({results:data})
    })
    .catch(err => {
      console.error(err);
    });
  }
  render(){

    return(
      <>
      <Inputs onInputOne={this.handleChange} onInputTwo={this.handleChangeTwo} fname={this.state.inputOne} sname={this.state.inputTwo}/>
      <Button handleClick={this.handleClick} /> 
      <Result nety={this.state.results} />


      </>
    );
  }








}


export default App;
