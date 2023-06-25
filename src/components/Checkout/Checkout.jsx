import { useState, useContext } from "react";
import { db } from '../../service/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { cartContext } from "../../Context/cartContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Checkout = () => {
    const { carrito, vaciar, total } = useContext(cartContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos esten completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan 
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        // orden: 

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.name,
                cantidad: producto.cantidad
            })),
            total: total,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        Promise.all(

            orden.items.map(async (item) => {
                debugger
                const id = (item.id).toString()
                //Por cada producto en la colección inventario obtengo una referencia, y a partir de esa referencia obtengo el doc. 
                const productoRef = doc(db, "productos", id);
                console.log("llega")
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                //Data es un método qu eme permite acceder a la información del Documento. 
                debugger
                await updateDoc(productoRef, {
                    stock: stockActual - item.cantidad,
                });

            })
        )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciar();
                    })
            })
    }


    return (


        <>
            <h2>Checkout</h2>
            <Form onSubmit={manejadorFormulario} className="formulario">
                <Form.Group>
                    {carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>
                                {producto.item.name} x {producto.cantidad}
                            </p>
                            <p> Precio $: {producto.item.precio} </p>
                             <img src={producto.item.photo} alt="no se ve"/>
                            <hr />
                        </div>
                    ))}
                    <Form.Text >
                        Total: {total}
                    </Form.Text>

                    <Form.Group>
                        <Form.Label> Nombre </Form.Label>
                        <Form.Control className="" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Apellido </Form.Label>

                        <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Telefono  </Form.Label>
                        <Form.Control type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email  </Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Email Confirmación </Form.Label>
                        <Form.Control type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    </Form.Group>

                    {error && <p style={{ color: "red" }}> {error} </p>}

                    <Button variant="primary" type="submit">
                        Finalizar Compra
                    </Button>
                </Form.Group>
            </Form>
            {
                ordenId && (
                    <strong>¡Ya se acreditó la compra! Tu número de orden es:  {ordenId} </strong>
                )
            }
        </>
    )
}

export default Checkout