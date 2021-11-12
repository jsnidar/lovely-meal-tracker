import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {

  return (
    <div>
      <Navbar className='navigation' bg='light' expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="JacquelynKPhotography_LovelyNutritionLogo_BLACK.png"
                height="80rem"
                className="d-inline-block align-top"
                alt="Lovely Nutrition Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/meals/new">Add Meal</Nav.Link>
                <Nav.Link href="/goal/edit">Set Exchange Goal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;