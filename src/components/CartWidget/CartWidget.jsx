import { useContext, useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/esm/Button';
import "./CartWidget.css"
import { cartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {
     const [number,setNumber]=  useState(0) //no se pidio cambiar el estado asi que no ahrehue la funcion para cambiarlo
    
     const { carrito } = useContext(cartContext)
      const value= carrito.reduce((acumulador, carrito) => acumulador + carrito.cantidad, 0);
     
      useEffect(()=>{
        
        setNumber(value)
      },[carrito])
      
    return (
      <Link  className="m-0 p-0" to={"/Cart"}>
      <Button className="flag  m-0 pt-5 d-flex button-color "  >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-cart-fill cartWidget" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
        </svg> 
        <Badge  className=" pt-1 m-1" height="25" bg="dark">{number}</Badge>
      </Button>
      </Link>
    
 
    )
  }
  export default CartWidget