import React from "react"
import ProductCard from "./ProductCard"
import "./products.css"

const Products = ({ keyword, pagenumber, addToCart }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='product-content  grid1'>
              <ProductCard keyword={keyword} pagenumber={pagenumber} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products