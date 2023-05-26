/* eslint-disable no-unused-vars */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"
// eslint-disable-next-line react/prop-types
const Item = ({id, name, precio,photo,categoria,stock}) => {
  
  return (
    <>
    
    <Card className='cardBack p-0 m-4 text-center' style={{ width: '18rem' }}> 
    
        <Card.Body className='' >
        <div className='colow'></div>
        <div className='itemFrame mt-2 mb-4'>
        
        <Card.Img className='cardImage' variant="top" src={photo} />
        </div>
        <Card.Title> {name}</Card.Title>
          <p>Precio: {precio} </p>
          <p>Stock: {stock}</p>
        </Card.Body>
        <Card.Footer >
        <Button className='m-1' variant="primary"  size="lg">Ver Detalles</Button>
        </Card.Footer>
        
    </Card>
    </>
  )
}

export default Item