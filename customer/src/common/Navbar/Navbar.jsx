import React, { useState } from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return (
    <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">
            <Link to = "/" className = "navbar-brand">
              <span className = "text-red">PFDelivery</span>
            </Link>

            <form className = "navbar-search flex">
              <input type = "text" placeholder='Search here ...' />
              <button type = "submit" className = "navbar-search-btn">
                <i className = "fas fa-search"></i>
              </button>
            </form>
      
            <div className = "flex">
              <div className = "navbar-btns">
                <Link to = "/" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <i className = "fas fa-user"></i>
                  </span>
                  <div className='btn-txt fw-5'>账户</div>
                </Link>
              </div>
              <div className = "navbar-btns">
                <Link to = "/" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <i className = "fas fa-shopping-cart"></i>
                  </span>
                  <div className='btn-txt fw-5'>购物车
                    <span className='cart-count-value'>0</span>
                  </div>
                </Link>
              </div> 
            </div>
          </div>
        </div>

        <div className='navbar-bottom bg-red'>
          <div className='container flex flex-between'>
            <ul className = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" className='navbar-hide-btn text-white' onClick={() => setIsSidebarOpen(false)}>
                <i className='fas fa-times'></i>
              </button>
              <li><Link to = '/' className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>首页</Link></li>
              <li><Link to = '/' className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>零食</Link></li>
              <li><Link to = '/' className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>饮料</Link></li>
              <li><Link to = '/' className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>方便食品</Link></li>
            </ul>

            <button type = "button" className='navbar-show-btn text-gold' onClick={() => setIsSidebarOpen(true)}>
              <i className = "fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar