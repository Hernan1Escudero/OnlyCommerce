import {  useState } from 'react'
import { Card } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

const ItemCount = ({inicial,stock,funcionAgregar}) => {
     
    const [ num, setproductos] = useState(inicial)
     
    const sumar =()=>{
       
       if(num < stock)
       setproductos(num +1)
       
    }

    const restar =()=>{
       if(num >inicial){
         setproductos(num -1)
       }
    }
  return (
    <Card>
    <div className=" container p-1">
    
      <div className="btn-group col-4   ">
      <Button type="button" onClick={restar} className="col-sm btn btn-primary" id="subtract"> - </Button>
      
          <input type="text" className=" text-center col-4 "  value={num}  id="value" readOnly/>
      <Button type="button"onClick={sumar} className="col-sm btn btn-primary" id="add"> + </Button>
      </div>
      
    </div>
    <Button onClick={()=>funcionAgregar(num)}> agregar al carrito</Button> 
    </Card>
  )
}

export default ItemCount