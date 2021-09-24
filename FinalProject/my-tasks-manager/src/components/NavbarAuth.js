import {Link} from 'react-router-dom'

function NavbarAuth() {
    return(
        <nav >
            <Link to='/' className="links">
              Welcome
            </Link>
              <ul className='nav-links'>
                <li>
                  <Link className='links' to="/tasks">Tasks</Link>
                </li>
              </ul>
        </nav>
          
    )
}

export default NavbarAuth