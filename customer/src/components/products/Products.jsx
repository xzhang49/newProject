import React from "react"
import ProductCard from "./ProductCard"
import "./products.css"

const Products = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='product-content  grid1'>
              <ProductCard addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products