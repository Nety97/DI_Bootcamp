
// const Navbar = () =>{
//     return (
//         <div>
//             <nav>
//                 <div class="nav-wrapper">
//                 <a href="#" class="brand-logo">My Blog</a>
//                 <ul id="nav-mobile" class="right hide-on-med-and-down">
//                     <li><a href="sass.html">Home</a></li>
//                     <li><a href="badges.html">About</a></li>
//                     <li><a href="collapsible.html">Contact</a></li>
//                 </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar;
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Post from './Post'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Navbar() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/:id" children= {<Post/>}/>
                
            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  export default Navbar