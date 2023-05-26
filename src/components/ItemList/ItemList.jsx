// eslint-disable-next-line no-unused-vars
import React from 'react'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import "./ItemList.css"

// eslint-disable-next-line react/prop-types
const ItemList = ({ productos }) => {
  return (
    <div className='itemList d-flex flex-wrap justify-content-center flex-row'>
      {productos.map((prod) => (
        <Link key={prod.id} style={{textDecoration: 'none'}}  to={`/detail/${prod.id}`}>
          <Item  {...prod} />
       </Link>
    
        
      ))}
    </div>
  );
};

export default ItemList;