import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="product" element={<OurStore/>}/>
            <Route path=":id" element={<SingleProduct/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="blog/:id" element={<SingleBlog/>}/>
            <Route path="compare-product" element={<CompareProduct/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="forgot-password" element={<Forgotpassword/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="resetpassword" element={<Resetpassword/>}/>
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="refund-policy" element={<RefundPolicy/>}/>
            <Route path="shipping-policy" element={<ShippingPolicy/>}/>
            <Route path="terms-conditions" element={<TermsAndConditions/>}/>
            <Route path="single-product" element={<SingleProduct/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<Checkout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
