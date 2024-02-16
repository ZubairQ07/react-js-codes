import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';

const NavbarComp = () => {
  const history = useNavigate();
  return (
  <>
 
       <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Navbar</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link} to={"/contacts"}>Contact</Nav.Link>
            <Nav.Link as={Link} to={"/users"}>Users</Nav.Link>
            <Nav.Link as={Link} to={"/hover"}>Hover</Nav.Link>
            <Nav.Link as={Link} to={"/redu"}>Redux Comp</Nav.Link>
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            <Button variant="outline-danger" size='sm' className='me-2' onClick={() => history('/')}>Go To Home</Button>
      <Button variant="outline-warning" size='sm' onClick={() => history(-1)}>Go Back</Button>
          </Nav>
        </Container>
      </Navbar>
      
     
  </>
  )
};

export default NavbarComp;
