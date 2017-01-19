import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// createClass here is used intentionally.
const Menu = React.createClass({

  render () {
    return (
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Minterest</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Your Minboard</NavItem>
          <NavItem href="#">Recent Mins</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>Login</NavItem>
          <NavItem>Logout</NavItem>
        </Nav>
      </Navbar>

    )
  }

})

export default Menu
