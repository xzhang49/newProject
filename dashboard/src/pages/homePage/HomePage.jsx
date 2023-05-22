import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import Main from "../../components/Home/Main"

const HomePage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <Main />
        </main>
    </>
  )
}

export default HomePage