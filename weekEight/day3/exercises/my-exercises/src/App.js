// // I have to make all in one file cause i cant keep downloading react 3 times a day :)
// //exercise xp
// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super ()
//     this.shootRegular = this.shootRegular.bind(this);

//     this.state = {
//       favoriteColor: 'red'
//     }
    
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({favoriteColor: 'yellow'})
//     },5000)
    
//   }

//   ChangeColor = () => {
//     this.setState({favoriteColor:'blue'})
//   }
//   shoot = () => {
//     alert('Great Shot!')
//   }
//   shootRegular = () =>{
//     alert(this)
//   }
//   shootRegularWithParameter= (val)=> {
//     alert(val)
//   }
//   shootWithArgument = (val2) => {
//     alert(val2)
//   }
//   shootTwo = () => {
//     alert(this)
//   }
//   render(){
    
//     return(
//       <>
//       <h1>My favorite color is {this.state.favoriteColor}</h1>
//       <button onClick={this.ChangeColor}>Change Color</button>
//       <button onClick={this.shoot}>Take the shot!</button>
//       <button onClick={this.shootRegular}>Keep Shooting!</button>
//       <button onClick={this.shootRegularWithParameter.bind(this,'Goal')}>Shooting!</button>
//       <button onClick={() => this.shootWithArgument('Goal')}>Shooting! Two</button>
//       <button onClick={this.shootTwo}>Keep Shooting!</button>
      
      
//       </>
//     )
//   }
// }
// export default App;


// exercise xp+

// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       isToggleOn: true,
//       isOn: 'On',
//       username: '',
//       age: null,
//       errormessage: '',
//       textarea: 'the content of a textarea goes in the value attribute'
//     }
//   }

//   handleKeyPress=(e)=>{
    
//     if (e.charCode === 13) {
//       alert(`the enter key was pressed, your input is: ${e.target.value}`)
//     }
//   }

//   isToggleOn =() =>{
    
//     if (this.state.isToggleOn) {
//       this.setState({isToggleOn: false})
//       this.setState({isOn: 'off'})
//     } else {
//       this.setState({isToggleOn: true})
//       this.setState({isOn: 'On'})
//     }
//   }
//   yourName =(e) => {
//     this.setState({username: e.target.value})
//   }
//   mySubmitHandler =()=>{
//     alert(`You are submiting ${this.state.username}`)
//   }
//   handleChange =(e)=>{
//     this.setState({textarea: e.target.value})
//   }
//   yourAge =(e)=>{
    
//     this.setState({age: e.target.value})
//     if (isNaN(this.state.age)) {
//       // alert('your age must be a number')
//       this.setState({errormessage: 'your age must be a number'})
//     }else{
//       this.setState({errormessage: ''})
//     }
//   }
//   render(){
//     function clickHandler () {
//       alert('I was clicked')
//     }

//     return(
//       <>
//         <button onClick={clickHandler}>Click Me!</button>
//         <input onKeyPress={this.handleKeyPress} placeholder='Press the ENTER key!'></input>
//         toggle button  
//         <button onClick={this.isToggleOn}>{this.state.isOn}</button>
//         <br/>
//         <h2>Hello {this.state.username} {this.state.age}</h2> 
//         <h3>Enter your name</h3>
//         <input onChange={this.yourName} name='' placeholder='Your name'></input>
//         <h3>Enter your age</h3>
//         <input onChange={this.yourAge} placeholder='Your age'></input> {this.state.errormessage}
//         <br/>
//         <textarea value={this.state.textarea} onChange={this.handleChange}/>
//         <select value='Volvo'>
//           <option>Ford</option>
//           <option>Volvo</option>
//           <option>Fiat</option>
//         </select>
//         <button onClick={this.mySubmitHandler}>Submit</button>
//       </>
//     )
//   }
// }

// export default App;

//Daily Challenge

import React from 'react';
import Form from './Components/Form';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      fname: '',
      lname: '',
      age: null,
      gender: '',
      destination: '',
      nuts: 'no',
      lactose: 'no',
      vegan: 'no'
    }
  }

  handleChange=(e)=>{
    this.setState({fname: e.target.value}) 
  }
  handleChange2 =(e) =>{
    this.setState({lname: e.target.value})
  }
  handleChange3 =(e)=>{
    this.setState({age: e.target.value})    
  }
  handleChange4 =(e) =>{
    this.setState({gender: "male"})
  }
  handleChange5 =(e) =>{
    this.setState({gender: "female"})
  }
  handleChange6= (e) =>{
    this.setState({destination: e.target.value})
  }
  handleChange7 =(e) =>{
    if (e.target.checked) {
      this.setState({nuts: "yes"})
    } else {
      this.setState({nuts: "no"})
    }
  }
  handleChange8 =(e) =>{
    if (e.target.checked) {
      this.setState({lactose: "yes"})
    } else {
      this.setState({lactose: "no"})
    }
  }
  handleChange9 =(e) =>{
    if (e.target.checked) {
      this.setState({vegan: "yes"})
    } else {
      this.setState({vegan: "no"})
    }
  }

  render() {
    return(
      <>
      <h1>Form</h1>
      <br/>
      <form>
      <input onChange={this.handleChange} placeholder='First Name'></input>
      <input onChange={this.handleChange2} placeholder='Last Name'></input>
      <input onChange={this.handleChange3} placeholder='Age'></input> <br/>
      <input onChange={this.handleChange4} type="radio" id="male" name="gender" value="male"/> 
      <label for="male">Male</label><br/>
      <input onChange={this.handleChange5} type="radio" id="female" name="gender" value="female"/>
      <label for="female">Female</label><br/>
      <h2>Select your destination</h2>
      <select onChange={this.handleChange6}>
        <option>Mexico</option>
        <option>Panama</option>
        <option>Venezuela</option>
      </select>
      <h2>Dietary restrictions:</h2>
      <input onChange={this.handleChange7} type="checkbox" id="nuts" name="nutsFree" value="nutsFree"/>
      <label for="nuts"> Nuts free</label><br/>
      <input onChange={this.handleChange8} type="checkbox" id="lactose" name="lactoseFree" value="lactoseFree"/>
      <label for="lactose"> Lactose free</label><br/>
      <input onChange={this.handleChange9} type="checkbox" id="vegan" name="vegan" value="vegan"/>
      <label for="vegan"> Vegan</label><br/>
      <button type='submit' value='submit'>Submit</button>
      </form>

      <Form fname={this.state.fname} lname={this.state.lname} age={this.state.age} gender={this.state.gender} destination={this.state.destination} nuts={this.state.nuts} lactose={this.state.lactose} vegan={this.state.vegan}/>
      </>
    )
  }
}

export default App
