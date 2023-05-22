import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import Account from "../../components/account/Account"

const AccountPage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <Account />
        </main>
    </>
  )
}

export default AccountPage