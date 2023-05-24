import React from 'react'
import "./home.css"
import { useParams } from 'react-router-dom'
import Products from "../../components/products/Products"

const Home = ({ addToCart }) => {
  window.scrollTo(0, 0);
  const {keyword, pagenumber} = useParams();

  return (
    <>
      <Products keyword={keyword} pagenumber={pagenumber} addToCart={addToCart} />
    </>
  )
}

export default Home