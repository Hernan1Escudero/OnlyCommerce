import React, {  useState } from 'react'

const CartContainer = () => {
 
    const [ num, setproductos] = useState(0)

    const sumar =()=>{
       if(num < 6)
       setproductos(num +1)
    }

    const restar =()=>{
       if(num != 0){
         setproductos(num -1)
       }
    }
  return (
    <div className="card m-3 p-2 ">
    <div className=" container p-1">
      <p> Agregar al carrito</p>
      <div className="btn-group col-4   ">
      <button type="button" onClick={restar} className="col-sm btn btn-primary" id="subtract"> - </button>
        <input type="text" className=" text-center col-4 "   value={num}  id="value" readOnly/>
        <button type="button" onClick={sumar} className="col-sm btn btn-primary" id="add"> + </button>
      </div>
      </div>
   
</div>
  )
}

export default CartContainer