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


function App() {
  return (
    <div className="App">
      <Router>
        <nav >
          <a href='http://localhost:3000/' className='linkHome'>
            <h1>Welcome</h1>
          </a>
            <ul className='nav-links'>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
        
        <Switch>
          <Route exact path='/tasks'>
            <Tables/>
          </Route>
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

const mapStateToProps = (state)=>{
  return{
      user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
