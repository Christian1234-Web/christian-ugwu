
import React, { Component } from 'react'
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';
import './index.css';
import Navbar from './components/Navbar/Navbar';


export class App extends Component {


  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>

    )
  }
}

export default App