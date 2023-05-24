/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getProducto, getProductos } from '../../AsyncMock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Wait from '../Wait/wait'

const ItemDetailContainer = () => {
     const [producto,setProducto] = useState(null)

     const {idProducto} = useParams()
   useEffect( ()=>{
       getProductos()
       .then( productosFiltrar => setProducto(productosFiltrar.filter(producto => producto.id === parseInt(idProducto)))
            )
   },[idProducto])
   
  return (
      <>
        {
          producto ?<ItemDetail className="" producto={producto}></ItemDetail> : <Wait></Wait>
        }
      </>
  )
}

export default ItemDetailContainer