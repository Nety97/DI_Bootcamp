import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'; //redux
import {Provider} from 'react-redux'; //redux
import thunk from 'redux-thunk'; //redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {reducer} from './redux/reducers' //redux
const store = createStore(reducer,applyMiddleware(thunk)) //redux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
