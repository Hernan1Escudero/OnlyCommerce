import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, name, precio,photo,categoria,stock}) => {
  
  return (
    <Card className='p-0 m-4 text-center' style={{ width: '18rem' }}> 
        <Card.Header>{categoria}</Card.Header>
        <Card.Body className='' >
        <Card.Title> {name}</Card.Title>
        <Card.Img variant="top" src={photo} />
          <p>Precio: {precio} </p>
          <p>Stock: {stock}</p>
        </Card.Body>
        <Card.Footer >
        <Button className='buttonBackground' variant="primary"  size="lg">Ver Detalles</Button>
        </Card.Footer>
        
    </Card>
  )
}

export default Item