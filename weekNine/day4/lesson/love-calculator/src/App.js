import Voting from './Voting';
import React from 'react'
import Fname from './components/Fname';
import Sname from './components/Sname';
import Calc from './components/Calc';
import Res from './components/Res';
import './App.css';

const App = () => {
    return (
      <>
          <Fname />
          <Sname />
          <Calc  />
          <Res />
      </>
    )
}

export default App;
