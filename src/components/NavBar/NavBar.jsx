import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import  "../NavBar/Navbar.css"

function BasicExample() {
  return (
    <>    
    <header>
        <div className="row flexOnQuery withBackground m-0">
          <div className="col m-0 p-1">
            <div className="secondBackground p-2 m-0">
            <h1 className="text-center text-white">OnlyCommerce</h1>
            </div>
          </div>
        </div>
      </header>
   <Navbar className='pt-3 pb-3' bg="light" expand='xl' sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="distance"href="#home">Todos</Nav.Link>
            <Nav.Link className="distance" href="#home">Materia Prima</Nav.Link>
            <Nav.Link className="distance" href="#link">Misc</Nav.Link>
            <NavDropdown className="m-0 p-0 "title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnologias</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">Nuestros Proveedores</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.3">Productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
   </>

  );
}

export default BasicExample;