// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
//import { getProductos } from '../../AsyncMock/products';
import Wait from "../Wait/Wait"
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { collection,getDocs,where,query} from 'firebase/firestore';
import { db } from '../../service/config';

const ItemListContainer = () => {
   
    const [productos, setProductos] = useState(null);
    const {idCategoria} = useParams()
    
     useEffect( () => {

      if(idCategoria){
        const productos= idCategoria? query(collection(db,"productos"),where("categoria","==",idCategoria)):collection(db,"productos")
          getDocs(productos)
          .then(res=>{
            const nuevosProductos = res.docs.map( doc =>{ 
              const data =doc.data()
              return {id: doc.id ,...data}
          })
          setProductos(nuevosProductos)
          console.log(productos)
        })
        
      }
      else{
      
          const productos= idCategoria? query(collection(db,"productos"),where("id","==",idCategoria)):collection(db,"productos")
          getDocs(productos)
          .then(res=>{
            const nuevosProductos = res.docs.map( doc =>{ 
              const data =doc.data()
              return {id: doc.id ,...data}
          })
          setProductos(nuevosProductos)
        })
        .catch(
          error=> console.log(error)
        )
     
      }  
      }, [idCategoria]) 

     

    return (
        < >
          { productos ? <ItemList className="itemListContainer " productos={productos}></ItemList>: <Wait></Wait>}
        
        </>
   )
}
export default ItemListContainer