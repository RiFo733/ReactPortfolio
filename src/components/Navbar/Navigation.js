import React from 'react'
// import {NavLink} from 'react-rout-dom'
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
     {
        return(
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#AboutMe">Richard Font</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1XfX_42SrAopAh1pxWnRMORTnJDCfKgKm/view?usp=sharing">Resume</Nav.Link>     
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}
export default Navigation;