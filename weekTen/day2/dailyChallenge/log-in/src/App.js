import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from "./components/Signin";
import Register from "./components/Register";
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav >
            <h1>Welcome</h1>
              <ul className='nav-links'>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
                  <li>
                      <Link to="/">Sign In</Link>
                  </li>
              </ul>
          </nav>
          <Switch>
            <Route path='/register'>
              <Register/>
            </Route>
            <Route path='/dashboard'>
              <Dashboard/>
            </Route>
            <Route path='/'>
              <Signin/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
