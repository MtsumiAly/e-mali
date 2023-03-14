import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import OurStore from './pages/OurStore';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
