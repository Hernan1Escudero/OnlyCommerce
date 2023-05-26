/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css" //ruta no deja de dar error en vercel
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <>    
    <header>
        <div className="row flexOnQuery withBackground m-0">
          <div className="col m-0 p-1">
            <div className="secondBackground p-2 m-0">
            <Link to={"/"}><h1 className="text-center text-white">UniCommerce</h1></Link>
            </div>
          </div>
        </div>
      </header>
   <Navbar className='navColor pt-3 pb-3  ' expand='xl' sticky="top">
      <div className='container '>
      <Navbar.Toggle aria-controls=" basic-navbar-nav" className='' />
        <Navbar.Collapse className='  justify-content-center' id="basic-navbar-nav">
          
          <Nav className='flex-row' >
          <Link className="distance mt-2" to={"/Categoria/Depilacion"}>Depilacion</Link>
          <Link className="distance mt-2" to={"/Categoria/Masajes"}>Masajes</Link>
          <Link className="distance mt-2" to={"/Categoria/Spa"}> Spa</Link>
            <NavDropdown className="m-0 p-0 "title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnologias</NavDropdown.Item>
             <NavDropdown.Item  href="#action/3.2">Nuestros Proveedores</NavDropdown.Item>
           <NavDropdown.Item  href="#action/3.3">Productos</NavDropdown.Item>
            </NavDropdown>
            <CartWidget className=""></CartWidget>
          </Nav>

          </Navbar.Collapse>
      
          
      </div>
      
    </Navbar>
   </>

  );
}

export default BasicExample;