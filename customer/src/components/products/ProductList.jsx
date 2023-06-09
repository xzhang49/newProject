import React from 'react'
import "./ProductList.scss"
import ProductCard from "./ProductCard"
import products from "../../assets/data/ProductData"

const Products = () => {
  return (
      <section className='product py-5 bg-ghost-white' id = "products">
        <div className='container'>
          <div className='product-content'>
            <div className='section-title'>
              <h3 className='fw-7 text-regal-blue ls-1'>所有产品</h3>
            </div>
            <div className='product-items grid'>
              {products.map((product) => (
                <div key = {product.id}>
                  <ProductCard 
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    count={product.count}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Products