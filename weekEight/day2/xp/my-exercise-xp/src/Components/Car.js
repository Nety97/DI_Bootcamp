// exercise 1
// const Car = () =>{
//     return(
//         <>
//         <h2>Hi, I am a Car!</h2>

//         </>
//     )
// }
// exercise 2
import React from "react";
import Garage from "./Garage";

class Car extends React.Component{
    constructor(props){
      super(props);
      console.log(props)
      this.state ={
        color: 'blue',
        size: 'small',
        nameC: props.name,
        model: props.model
      }
      
    }
    render () {
      return(
        <>
            <h2>Hi, I am a {this.state.color} Car!</h2>
            <Garage size={this.state.size}/>
            <h2>and I am a {this.state.nameC} {this.state.model}</h2>
        </>
      )
    }
  } 

export default Car 