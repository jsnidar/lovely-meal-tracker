import React from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {

  return (
    <div>
      <Navbar className='navigation' bg='light' expand="lg">
          <Container>
            <Image src="JacquelynKPhotography_LovelyNutritionLogo_BLACK.png" fluid style={{height: '3rem'}} />
            <Navbar.Brand href="/">Lovely Meal Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;