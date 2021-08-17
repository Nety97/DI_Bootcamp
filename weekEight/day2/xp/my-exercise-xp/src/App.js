// Exercise mini project
// import logo from './logo.svg';
// import './App.css';
// import Car from './Components/Car'
// import React from 'react'
// import Phone from './Components/Phone';
// const carinfo = {name: "Ford", model: "Mustang"};

// function App() {
//   return (
//     <div className="App">
//       <Car name={carinfo.name} model={carinfo.model}/>
//       <Phone />
//     </div>
//   );
// }



// export default App;

//exercise xp
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CardBoot from './Components/CardBoot';

class PrintHello extends React.Component {
  render(){
    return (
      <>
      {/* <h1>I Love React</h1> */}
      <h1>I'm a React Component</h1>;
      </>
    )
  }
}

function Bootstrap() {
  return(
    <div className="card m-5" style={{width: '30rem'}}>
      <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">Bob Dylan</h5>
      <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
      </div>
    </div>
  )
  
}

function App() {
  return(
    <>
    <PrintHello />
    <Bootstrap />
    <CardBoot title2="Welcome to react" description2="React is the most popular rendering library in the world" buttonLabel2="Go to the official website" buttonURL2="https://reactjs.org/" title="McCartney" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg" buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney" description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."/>
    </>
  )
  
}

export default App