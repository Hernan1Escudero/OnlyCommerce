import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Link } from "react-router-dom"



const Cart = () => {
    const { carrito, vaciar, total=0, cantidadTotal } = useContext(cartContext);

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
            
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciar()}> Vaciar carrito </button>
            <Link to='/checkout'> Finalizar Compra </Link>

        </div>
    )
}

export default Cart