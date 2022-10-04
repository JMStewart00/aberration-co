import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

const CustomNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <Container>
        <Navbar.Brand>
          <img className="nav__image" src="/assets/logo.png" alt="Aberration, Co." />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#culture">Culture</Nav.Link>
            <Nav.Link href="#personality">Personality</Nav.Link>
            <Nav.Link href="#different">Different</Nav.Link>
            <Nav.Link href="#grit">Grit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNav