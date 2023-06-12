/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getProducto, getProductos } from '../../AsyncMock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Wait from "../Wait/Wait"
import {getDoc,doc} from 'firebase/firestore';
import { db } from '../../service/config';

const ItemDetailContainer = () => {
     const [producto,setProducto] = useState()

     const {idProducto} = useParams()

 /*   useEffect( ()=>{
       getProductos()
       .then( productosFiltrar => setProducto(productosFiltrar.filter(producto => producto.id === parseInt(idProducto)))
            )
   },[idProducto]) */
  useEffect(()=>{
   
    const producto= doc(db,"productos",idProducto)
    getDoc(producto)
    .then(res=>{
        const data =res.data()
        const nuevoProducto =[{id: data.id ,...data}]
         setProducto(nuevoProducto)
         
    })
    .catch(
      error=> console.log("esu:",error)
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