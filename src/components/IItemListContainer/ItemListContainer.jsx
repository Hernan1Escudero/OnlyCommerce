import React, { useEffect, useState } from 'react'

import ItemList from '../ItemList/ItemList';
import { getProductos } from '../../AsyncMock/products';
import Wait from '../Wait/wait';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
   
    const [productos, setProductos] = useState(null);
    const {idCategoria} = useParams()
    
    useEffect( () => {

      if(idCategoria){
        getProductos()
        .then( res=>{
          setProductos(res.filter(productos => productos.categoria === idCategoria))
        })
        .catch(error => console.error("No se obtuvieron productos:"+ error))
      }
      else{
        getProductos()
            .then(response => setProductos(response))
            .catch(error => console.error("No se obtuvieron productos:"+ error))
      }
          
      }, [idCategoria])
     console.log(productos)
    return (
        < >
          { productos ? <ItemList  productos={productos}></ItemList>: <Wait className="hola"></Wait>}
        
        </>
   )
}

export default ItemListContainer