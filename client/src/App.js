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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="store" element={<OurStore/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
