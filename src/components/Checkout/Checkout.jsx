import { useState, useContext } from "react";
import {db} from '../../service/config';
import {collection, addDoc} from 'firebase/firestore';
import { cartContext } from "../../Context/cartContext";



const Checkout = () => {
    const { carrito, vaciar } = useContext(cartContext)
     console.log("OOO",carrito)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    
    //funciones y validaciones: 

    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos esten completos:
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos"); 
            return;
        }

        //Validamos que los campos del email coincidan 
        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //Paso 1: Creamos el objeto de la orden: 

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.name,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto)=> total + producto.item.precio * producto.stock, 0),
            nombre,
            apellido, 
            telefono,
            email
        };
         console.log("orden1 ",orden)
        //Paso 2: Guardamos la orden en la base de datos:
        
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                console.log("orden2 ",orden)
                setOrdenId(docRef.id);
                vaciar();
            })
            .catch(error => {
                console.error("Error al crear la orden.", error);
                setError("Se produjo un error al crear la orden, vuelva prontus");
            })
    }

    return(


    <div>
        <h2>Checkout</h2>
        <form onSubmit={ manejadorFormulario } className="formulario">
            {carrito.map(producto => (
                <div key={producto.item.id}>
                    <p>
                        {producto.item.name} x {producto.cantidad}
                    </p>
                    <p> Precio $: {producto.item.precio} </p>
                    <hr />
                </div>
            ))}
            <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{color:"red"}}> {error} </p>}
                <button type="submit"> Finalizar Compra </button>
        </form>
        {
            ordenId && (
                <strong>¡Gracias por tu compra! Tu número de Orden es {ordenId} </strong>
            )
        }
    </div>
  )
}

export default Checkout