import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const {  carrito, vaciar, total, cantidadTotal } = useContext(cartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito</h2>
                <Link to='/'> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>       
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciar()}> Vaciar carrito </button>
            <Link to='/Checkout'> Finalizar Compra </Link>
        </div>
    )
}

export default Cart