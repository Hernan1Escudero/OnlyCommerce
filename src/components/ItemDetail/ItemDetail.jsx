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
    <Card className='cuco p-0  text-center d-flex felx-start  flex-row' style={{ height:"100%", width: '100%' }}> 
       <div className='itemDetailFrame  '>
       <Card.Img  className="cardImage" variant="top" src={photo}   />
       </div>
        <Card.Body className='' >
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


