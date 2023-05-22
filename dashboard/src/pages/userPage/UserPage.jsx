import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import Users from "../../components/users/Users"

const UserPage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <Users />
        </main>
    </>
  )
}

export default UserPage