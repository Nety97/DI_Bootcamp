import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import ErrorBoundary from './components/ErrorBoundary';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      errorInfo: null
    }
  }

  componentDidCatch(){

  }

  sendErr =()=>{

  }

  render() {
      return (
      <div>
        <button onClick={this.sendErr}>Occur an error</button>
      <Modal/>
      </div>
    );
  }
}

export default App;
