import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import CheckoutPage from './components/CheckoutPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/:id" element={<OrderSummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
