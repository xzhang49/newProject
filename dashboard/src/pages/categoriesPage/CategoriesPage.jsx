import React from 'react'
import Sidebar from "../../common/sidebar/Sidebar"
import Header from "../../common/header/Header"
import Categories from "../../components/Categories/Categories"

const CategoriesPage = () => {
  return (
    <>
        <Sidebar />  
        <main className='main-wrap'>
            <Header />
            <Categories />
        </main>
    </>
  )
}

export default CategoriesPage