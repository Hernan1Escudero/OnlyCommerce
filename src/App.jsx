
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import ItemListContainer from './components/IItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './Context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  
  return (
    <div className="hi  pb-5 ">
      <div className="m-4 shadow ">
        <BrowserRouter>
          <CartProvider >
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/Categoria/:idCategoria"  element={<ItemListContainer />}/>
              <Route path="/detail/:idProducto" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path='/Checkout' element={ <Checkout/>} />
              <Route exact path="*" element={<ItemListContainer />} />
              
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
