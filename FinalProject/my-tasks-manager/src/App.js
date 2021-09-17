import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from './components/SignIn';
import Register from './components/Register'
import Tables from './components/Tables';
import {connect} from 'react-redux';
import Auth from './Auth';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
 
  render (){
    return (
      <div className="App">
        <Router>
          <nav >
            <Link to='/' className="links">
              Welcome
            </Link>
              <ul className='nav-links'>
                  <li>
                      <Link className='links' to="/register">Register</Link>
                  </li>
                  <li>
                      <Link className='links' to="/signin">Sign In</Link>
                  </li>
              </ul>
          </nav>
          
          <Switch>
            <Route exact  path='/tasks' component={Auth(Tables, this.props.token)}/>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/signin'>
              <Signin/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

const mapStateToProps = (state)=>{
  return{
      user: state.user,
      token: state.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
