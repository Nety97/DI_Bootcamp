
import './App.css';
import React, {useState, useEffect} from 'react'


const App = () =>{
  const [counter, setCounter] = useState(0)
  // const [name, setName] = useState('')
  // useEffect(()=> {
  //   console.log('useEffect', counter);
  
  // }, []
  // )
  
  return(
          <div>
            <p>{counter}</p>
            <button onClick={(setCounter(counter+1))}>Click</button>
            {/* <button onClick={(setCounter(counter+1))}>Click</button> */}
            {/* <input type='text' onChange={(e)=> setName(e.target.value)}/> */}
            {/* <p>Your name is: {name}</p> */}
          </div>
        )
}




// class App extends React.Component{
//   constructor(){
//     super();
//     this.state ={
//       counter: 0 
//     }
//   }
//   componentDidMount(){
//     console.log('counter', this.state.counter);
//   }
//   componentDidUpdate(){
//     console.log('counter', this.state.counter);
//   }
  

//   render(){
//     return(
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={()=> this.setState({counter:this.state.counter+1})}>Click</button>
//       </div>
//     )
//   }
// }
export default App;
