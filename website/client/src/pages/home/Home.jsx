import React from 'react'
import "./home.css"
import Categories from "../../components/categoreis/Categories"
import SliderHome from "../../components/Slider/Slider"
import FlashDeals from "../../components/flashDeals/FlashDeals"
import TopCate from "../../components/top/TopCate"
import NewArrivals from "../../components/newarrivals/NewArrivals"
import Discount from "../../components/discount/Discount"
import Shop from "../../components/shops/Shop"
import Annocument from "../../components/annocument/Annocument"
import Wrapper from "../../components/wrapper/Wrapper"

const Home = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Home