
import './App.css'
import ItemListContainer from './components/IItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Aqui van los items"/>
    </>
  );
}

export default App
