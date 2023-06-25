import {  useState } from 'react'

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
    <div className="card ">
    <div className=" container p-1">
    
      <div className="btn-group col-4   ">
        <button type="button" onClick={restar} className="col-sm btn btn-primary" id="subtract"> - </button>
          <input type="text" className=" text-center col-4 "  value={num}  id="value" readOnly/>
        <button type="button" onClick={sumar} className="col-sm btn btn-primary" id="add"> + </button>
      </div>
      
    </div>
    <Button onClick={()=>funcionAgregar(num)}> agregar al carrito</Button> 
</div>
  )
}

export default ItemCount