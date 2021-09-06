
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



function App() {
  return (
    <div className="App">
      <Router>
        <nav >
          <h1>Welcome</h1>
            <ul className='nav-links'>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
        <Tables/>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
