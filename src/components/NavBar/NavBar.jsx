/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css' //ruta no deja de dar error en vercel
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <>
      <Navbar className='nav pb-2  ' expand='xl' sticky="top">
      <div className='d-flex flex-row'>
        <header className='headerFrame '>
          <div className=" row flexOnQuery withBackground ">
            <div className="col ">
              <div className="secondBackground p-3 ">
                <Link to={"/"}><h1 className="text-center text-white">UniCommerce</h1></Link>
              </div>
            </div>
          </div>
        </header>
        <CartWidget className="flag"></CartWidget>
        </div>
        <Navbar.Toggle aria-controls=" basic-navbar-nav" className='' />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className='' >
            <Link className="distance mt-2" to={"/Categoria/Depilacion"}>Depilacion</Link>
            <Link className="distance mt-2" to={"/Categoria/Masajes"}>Masajes</Link>
            <Link className="distance mt-2" to={"/Categoria/Spa"}> Spa</Link>
            <NavDropdown className="distance p-0 " title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnologias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nuestros Proveedores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Productos</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      
    </>

  );
}

export default BasicExample;