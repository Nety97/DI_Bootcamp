import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

class Shop extends React.Component{
    constructor(){
        super();
        this.setState ={
            err: false
        }
    }
    componentDidMount(){
        throw new Error('hahaaha')
    }
    render(){
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
                <h1>Shop</h1>
            </div>
        )
    }
}

export default Shop;