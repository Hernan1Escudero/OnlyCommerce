
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import ItemListContainer from './components/IItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  return (
    <div className='hi pb-5 '>
     <div className='m-5  shadow '>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={ <ItemListContainer/>}/>
      <Route path='/Categoria/:idCategoria' element={ <ItemListContainer/>}/>
      <Route path='/detail/:idProducto' element={ <ItemDetailContainer/>}/>
      <Route exact path='*' element={ <ItemListContainer/>}/>
      </Routes>
      </BrowserRouter> 
      </div>
    </div>
    
    );
}

export default App
