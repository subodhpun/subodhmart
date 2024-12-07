import React from 'react'
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Products from '../src/components/Products/Products'
import Contact from '../src/components/Contact/Contact'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Cart from '../src/components/Cart/Cart'
import CategoryDetails from '../src/components/Catagory/CatagoryDetails'; // Create this component
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/:category" element={<CategoryDetails />} /> {/* Dynamic route */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
