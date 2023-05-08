import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login"
import Dashboard from './Dashboard'
import HomePage from './pages/homePage/HomePage'
import ProductPage from './pages/productPage/ProductPage'
import CategoriesPage from './pages/categoriesPage/CategoriesPage'
import OrderPage from "./pages/orderPage/OrderPage"
import OrderDetailPage from "./pages/orderDetailPage/OrderDetailPage"
import "./style.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/category' element={<CategoriesPage />}></Route>
        <Route path='/orders' element={<OrderPage />}></Route>
        <Route path='/order' element={<OrderDetailPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
