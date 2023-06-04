import React from 'react'
import './products.css'
import ProductCard from "./ProductCard"
import products from "../../assets/data/ProductData"

const Products = () => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='product-content grid1'>
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  count={product.count}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products