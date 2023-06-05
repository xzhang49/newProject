import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="danger" variant="light">
      <Container>
        <Navbar.Brand href="/">PF Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">首页(Home)</Nav.Link>
            <Nav.Link href="/">零食(Snacks)</Nav.Link>
            <Nav.Link href="/">饮料(Drink)</Nav.Link>
            <Nav.Link href="/">方便食品(Instant)</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/">
              <i className='fa fa-user fa-lg'></i>
            </Nav.Link>
            <Nav.Link href="/">
              <i className='fa fa-cart-shopping fa-lg'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header