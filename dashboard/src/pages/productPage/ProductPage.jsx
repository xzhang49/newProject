import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/Header/Header"
import MainProducts from '../../components/products/MainProducts'
import AddProduct from '../../components/products/AddProduct'

const ProductPage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
        <AddProduct />
      </main>
    </>
  )
}

export default ProductPage