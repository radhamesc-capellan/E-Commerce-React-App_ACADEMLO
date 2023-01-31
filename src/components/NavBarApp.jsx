import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/rad_vector.png";
import { FaHome , FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { BiPurchaseTag } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";
const NavBarApp = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem('token', '')
  }
  
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark" size="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt="rad-commerce"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Rad-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to='/'><FaHome/> <span> Home </span> </Nav.Link>
              {/* <div>{ conditional render button}</div> */}
              <Nav.Link as={Link} to='/login'><FaUserAlt/><span> Login </span></Nav.Link>
              <Nav.Link as={Link} to='/purchases'><BiPurchaseTag/> <span> Purchases </span> </Nav.Link>
              <Nav.Link><FaShoppingCart/> <span> Cart </span> </Nav.Link>
              <Nav.Link onClick={logout}> LogOut</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarApp;
