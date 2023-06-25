import { useContext } from "react"
import { cartContext } from "../../Context/cartContext";


const CartItem = ({item, cantidad}) => {
    const {carrito,eliminarProductos} = useContext(cartContext);
    console.log(item.photo)
  return (
    <div>

        <h4> {item.name} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <img src={item.photo}/>
        <button onClick={()=> eliminarProductos(item.id)}> Eliminar </button>
        <hr />

    </div>
  )
}

export default CartItem