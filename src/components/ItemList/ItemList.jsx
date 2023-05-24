import React from 'react'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <div className='d-flex flex-wrap justify-content-center flex-row'>
      {productos.map((prod) => (
        <Link key={prod.id} style={{textDecoration: 'none'}}  to={`/detail/${prod.id}`}>
          <Item  {...prod} />
       </Link>
    
        
      ))}
    </div>
  );
};

export default ItemList;