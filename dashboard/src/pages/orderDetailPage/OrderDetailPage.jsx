import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import OrderDetailmain from "../../components/orders/OrderDetailmain"

const OrderDetailPage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <OrderDetailmain />
        </main>
    </>
  )
}

export default OrderDetailPage