/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'

import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { cartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const { id, name, precio, photo, categoria, stock } = producto[0]
   
  const { carrito,agregarProductos } = useContext(cartContext)

  const [cantidad, agregarCantidad] = useState(0)

  const add = (cantidad) => {
    agregarCantidad(producto.length)
    const item = { id, name, precio }
    agregarProductos(item, cantidad)
  }

  // Cart container esta en progreso no lo molesten
  return (
    <Card className='cuco p-0 m-0  text-center d-flex felx-start  flex-row' style={{ height: "80%", width: '100%' }}>
      <div className='itemDetailFrame  '>
        <Card.Img className="cardImage" variant="top" src={photo} />
      </div>
      <Card.Body className='' >
        <Card.Title>{categoria}</Card.Title>
        <p>Precio: {name} </p>
        <p>Precio: ${precio} </p>
        <p>Stock: {stock}</p>
        {
          cantidad > 0 ? <Link to="/cart" > Terminar compra</Link> : <ItemCount inicial={0} stock={stock} funcionAgregar={add}></ItemCount>
        }

      </Card.Body>

    </Card>
  )
}

export default ItemDetail


