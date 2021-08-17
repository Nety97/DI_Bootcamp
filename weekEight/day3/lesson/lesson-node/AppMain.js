import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'tachyons';
import Parent from './Parent'
import Child from './Child'
import Counter from './Counter';
import Error from './Counter'

ReactDOM.render(
  <React.StrictMode>
    <Error>
        <Counter />
    </Error>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();