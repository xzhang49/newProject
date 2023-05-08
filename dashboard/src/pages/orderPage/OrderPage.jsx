import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/Header/Header"
import OrderMain from "../../components/orders/OrderMain"

const OrderPage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <OrderMain />
        </main>
    </>
  )
}

export default OrderPage