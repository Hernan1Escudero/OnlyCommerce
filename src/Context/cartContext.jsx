/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext({carrito:[]})


export const CartProvider = ({children})=>{

     const [carrito,setCarrito] = useState([])
         console.log(carrito)
       const agregarProductos =(item,cantidad)=>{
           const prodExist = carrito.find(prod => prod.item.id == item.id)
             if (!prodExist ){
                setCarrito(prev => [...prev,{item,cantidad}])
             }
             else{
                const update = carrito.map(
                    prod =>{
                        if( prod.item.id == item.id){
                            return {...prod,cantidad:prod.cantidad+cantidad}
                        }
                        else{
                            return
                        }
                    }
                );
                setCarrito(update)
             }
       }

       const eliminarProductos =(id)=>{
        const updatedCart = carrito.filter(prod => prod.id != id)
         setCarrito(updatedCart)
       }

       const vaciar =()=>{
         setCarrito([])
       }
       
      return (
         <cartContext.Provider value={{carrito,agregarProductos,eliminarProductos,vaciar}}>
            {children}
         </cartContext.Provider>
      )
}