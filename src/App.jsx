import React from 'react'
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import Pages from '../src/components/Pages/Pages'
import Products from '../src/components/Products/products'
import Contact from '../src/components/Contact/Contact'
import Login from '../src/components/Login/Login'
import Cart from '../src/components/Cart/Cart'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Pages" element={<Pages />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
