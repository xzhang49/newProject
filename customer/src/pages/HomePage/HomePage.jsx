import React from 'react'
import ProductList from "../../components/products/ProductList"
import "./HomePage.scss"


const HomePage = () => {
  return (
    <div className = "home-page">
      <ProductList />
    </div>
  )
}

export default HomePage