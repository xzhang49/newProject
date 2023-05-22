import React, { useState } from 'react'
import { Link } from "react-router-dom"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className='header'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              </ul><ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>
              <li>
                <Link to='/'>首页</Link>
              </li>
              {/* <li>
                <Link to='/user'>用户账户</Link>
              </li>
              <li>
                <Link to='/order'>订单查询</Link>
              </li> */}
              <li>
                <Link to='/contact'>联系我们</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
      </header>
    </>
  )
}

export default Navbar