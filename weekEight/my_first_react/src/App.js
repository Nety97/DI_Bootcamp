import logo from './logo.svg';
import './App.css';
//// import Hello from './Hello';
// import './Hello.css';
//// import Card from 'react-bootstrap/Card'
import Robot from './robot';
import React from '.react'


// const robots = [
//   {name: 'Robot 1', email: 'rb1@gamil.com', username:'rb1', id: 1},
//   {name: 'Robot 2', email: 'rb2@gamil.com', username:'rb2', id: 2},
//   {name: 'Robot 3', email: 'rb3@gamil.com', username:'rb3', id: 3},
//   {name: 'Robot 4', email: 'rb4@gamil.com', username:'rb4', id: 4},
//   {name: 'Robot 5', email: 'rb5@gamil.com', username:'rb5', id: 5}
// ]

//{/* <Hello name={'Dan'} username={'Dan978'} pass={'1234'}/> */}
//{/* <Hello name={'Nety'} username={'Natunat'} myarr={arr}/> */}
// class App extends React.component {
//   constructor(){
//     super();
//     this.state = {
//       robots: []
//     }
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       this.setState({robots:data})
//     })
//     .catch(e => {
//       console.log(e)
//     })
//   }
//   render(){
//     return (
//       <>
//       {/* {
//         robots.map((item, i) =>{
//           return <Robot robotinfo = {item} />
//         })
//       } */}
  
//       <Robot robotinfo = {robots}/>
  
//       </>
//     );
//   }
  
// }

// export default App;


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({robots:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  componentDidUpdate() {
    console.log(this.state.robots);
  }

  render() {
    const {robots} = this.state;
    return (
      <>
        <Robot robots = {robots} />
      </>
    );
  }
}

export default App;
