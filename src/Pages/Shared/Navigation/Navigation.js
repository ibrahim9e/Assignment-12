import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/banner4.png'

const Navigation = () => {
    const {user, logout}=useAuth();
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><img src={logo}alt="" width="70px" /></Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
          { 
          user?.email?
          <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>:
          ''
          }
           
          {
             user?.email ?
            
             <Button onClick={logout} variant="light">Logout</Button>  :         
             <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
           
           }
           
        
          <Navbar.Text>

      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
        </div>
    );
};

export default Navigation;