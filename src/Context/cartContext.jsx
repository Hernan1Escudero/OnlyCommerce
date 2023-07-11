/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext({carrito:[],
  total: 0,
  cantidadTotal: 0
})


export const CartProvider = ({children})=>{

     const [carrito,setCarrito] = useState([])
     const [total, setTotal] = useState(0);
     const [cantidadTotal, setCantidadTotal] = useState(0);
     console.log("set carrito",carrito)
        console.log("setcantidadtotal",total)
        console.log("settotal",cantidadTotal)
       const agregarProductos =(item,cantidad)=>{
           const prodExist = carrito.find(prod => prod.item.id == item.id)
             if (!prodExist ){
                setCarrito(prev => [...prev,{item,cantidad}])
               
                setCantidadTotal( prev => prev + cantidad);
                setTotal(prev => prev + (item.precio * cantidad));
             }
             else{
                const update = carrito.map(
                    prod =>{
                        if( prod.item.id == item.id){
                            return {...prod,cantidad:prod.cantidad+cantidad}
                        }
                        else{
                            return  prod;
                        }
                    }
                );
                setCarrito(update)
                setCantidadTotal( prev => prev + cantidad);
                setTotal(prev => prev + (item.precio * cantidad));
             }
       }

       const eliminarProductos =(id)=>{
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        debugger;
        const updatedCart = carrito.filter(prod=> prod.item.id != productoEliminado.item.id)
        
         setCarrito(updatedCart)
         setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
       }

       const vaciar =()=>{
         setCarrito([])
         setCantidadTotal(0);
         setTotal(0);
       }
       
      return (
         <cartContext.Provider value={{carrito,agregarProductos,eliminarProductos,vaciar,total, cantidadTotal}}>
            {children}
         </cartContext.Provider>
      )
}