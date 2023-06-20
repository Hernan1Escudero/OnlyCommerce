import { useContext } from "react"
import { cartContext } from "../../Context/cartContext";


const CartItem = ({item, cantidad}) => {
    const {carrito,eliminarProductos} = useContext(cartContext);
  return (
    <div>

        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProductos(item.id)}> Eliminar </button>
        <hr />

    </div>
  )
}

export default CartItem