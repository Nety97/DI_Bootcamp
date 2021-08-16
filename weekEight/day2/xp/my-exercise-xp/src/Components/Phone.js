import React from "react";


class Phone extends React.Component{
    constructor(){
      super();
     
      this.state ={
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
      }
      
    }
    changeColor = () => {
        return this.setState({color: 'blue'})
    }
    render () {
      return(
        <>
           <h2>My phone is a {this.state.brand}</h2>
           <h3>It is a {this.state.color} {this.state.model} from {this.state.year}</h3>
           <button onClick={this.changeColor}>Change Color</button>
        </>
      )
    }
  } 

export default Phone 