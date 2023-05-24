import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Data from "./assets/data/Data"
import Sdata from "./assets/data/Sdata"
import Layout from "./common/layout/Layout"
import Home from "./pages/home/Home"
import User from "./pages/user/User"
import Order from "./pages/order/Order"
import Contact from "./pages/contact/Contact"
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Checkout from "./pages/checkout/Checkout"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route  path='/' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            <Route  path='/search/:keyword' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            <Route  path='/page/:pagenumber' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            <Route  path='/search/:keyword/page/:pageNumber' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            <Route path="user" element={<User />} />
            <Route path="order" element={<Order />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
