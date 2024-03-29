
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element= { <ItemListContainer/> }/>
        <Route path='/category/:categoryId' element= { <ItemListContainer/> }/>
        <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
        <Route path='/Cart' element= {<Cart/>}/>
        <Route path='/Checkout' element= {<Checkout/>}/>
        <Route path='*' element= {<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
