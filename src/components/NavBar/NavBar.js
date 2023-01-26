import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'

export default function NavBar() {

  return (<Navbar className='nav'>
    <Container>
      <Navbar.Brand href="/"><div className='nome'>Lucas Migliorin</div></Navbar.Brand>
      <Navbar.Toggle />

      <Nav className="me-2">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};