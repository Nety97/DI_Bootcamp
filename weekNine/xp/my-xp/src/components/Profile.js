import {Navbar, Container, Nav} from 'react-bootstrap';
function Profile() {
    return(
        <div>
            <div>
          <Navbar bg="primary" variant="dark">
            <Container>
            
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="profile">Profile</Nav.Link>
              <Nav.Link href="shop">Shop</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
          
            </div>
            <h1>Profile</h1>
        </div>
    )
}
export default Profile;