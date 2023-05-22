import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import MainProducts from '../../components/products/MainProducts'
import AddProduct from '../../components/products/AddProduct'
import EditProduct from '../../components/products/EditProduct'
import products from '../../data/Products'

const ProductPage = ({ match }) => {
  // const productId = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
        <AddProduct />
        {/* <EditProduct productId={productId} /> */}
      </main>
    </>
  )
}

export default ProductPage