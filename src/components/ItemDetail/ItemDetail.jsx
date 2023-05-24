/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContainer from '../CartContainer/CartContainer';

const ItemDetail = ({producto}) => {
  const{id, name, precio,photo,categoria,stock}= producto[0]
  console.log(name)
  // Cart container esta en progreso no lo molesten
  return (
    <Card className='p-0 m-5 text-center d-flex flex-row' style={{ height:"20%", width: '90%' }}> 
       <Card.Img  className="m-2" variant="top" src={photo}  style={{ height:"25rem", width: '50%' }} />
        <Card.Body className='mt-5' >
        <Card.Title>{categoria}</Card.Title>
        <p>Precio: {name} </p>
          <p>Precio: ${precio} </p>
          <p>Stock: {stock}</p>
          <CartContainer></CartContainer>
        </Card.Body>
         
    </Card>
  )
}

export default ItemDetail


