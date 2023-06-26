import { useContext } from "react"
import { cartContext } from "../../Context/cartContext";
import { Card,Button } from "react-bootstrap";


const CartItem = ({ item, cantidad }) => {
  const { carrito, eliminarProductos } = useContext(cartContext);
  console.log(item.photo)
  return (

    <Card>
      <Card.Body>
      <h4> {item.name} </h4>
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {item.precio} </p>
      <Card.Img src={item.photo}  width={"10px"} height={"150px"}></Card.Img>
      
      </Card.Body>
      <Button onClick={() => eliminarProductos(item.id)}> Eliminar </Button>
    </Card>

  )
}

export default CartItem