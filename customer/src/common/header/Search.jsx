import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Search = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="danger" variant="light">
      <Container>
        <Navbar.Brand href="/">PF to Buy Go</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">首页</Nav.Link>
            <Nav.Link href="/contact">联系我们</Nav.Link>
          </Nav>
        
          <Nav>
            <Nav.Link href="/">
              <i className='fa fa-user icon-circle'></i>
            </Nav.Link>
            <Nav.Link href="/cart">
              <i className='fa fa-shopping-bag icon-circle'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Search