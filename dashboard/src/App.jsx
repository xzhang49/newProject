import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from "./common/login/Login"
import HomePage from './pages/homePage/HomePage'
import ProductPage from './pages/productPage/ProductPage'
import CategoriesPage from './pages/categoriesPage/CategoriesPage'
import OrderPage from "./pages/orderPage/OrderPage"
import OrderDetailPage from "./pages/orderDetailPage/OrderDetailPage"
import UserPage from "./pages/userPage/UserPage"
import AccountPage from "./pages/accountPage/AccountPage"

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./redux/Actions/ProductActions";
import { listOrders } from "./redux/Actions/OrderActions";

import "./style.css"
import "./responsive.css"
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/category' element={<CategoriesPage />}></Route>
        <Route path='/orders' element={<OrderPage />}></Route>
        <Route path='/order' element={<OrderDetailPage />}></Route>
        <Route path='/users' element={<UserPage />}></Route>
        <Route path='/account' element={<AccountPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
