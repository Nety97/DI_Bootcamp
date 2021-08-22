
import './App.css';
import Xp from './components/Xp';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import "bootstrap/disot/css/botstrap.min.css";
// import 'bootstrap'
import {Navbar, Container, Nav} from 'react-bootstrap';
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route> 
      
      <Route path='/shop'>
        <ErrorBoundary>
          <Shop />
        </ErrorBoundary>
      </Route> 
        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
            
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link><br/>
              <Nav.Link href="profile">Profile</Nav.Link><br/>
              <Nav.Link href="shop">Shop</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
          
        </div>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
