import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const Layout = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">
              Products
            </Link>
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Layout;
