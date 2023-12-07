import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './pages/ItemListContainer//ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    
      <BrowserRouter >
      <CartProvider>
    <NavBar/> 
    <Routes>
      <Route path ='/'element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path ="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/category/:categoryId/:productId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path= '*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
    
  );
}

export default App;