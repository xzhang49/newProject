import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>PF to Buy Go</h1>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-weixin'></i>
                <span>weichat</span>
              </div> 
              
            </div>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-cc-stripe'></i>
                <span>stripe</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>联系方式</h2>
            <ul>
              <li>电话: 832-420-9391</li>
              <li>微信号: xzhanguh</li>
              <li>地址: 3333 Weslayan, Houston, TX 77027, United States </li>
              <li>邮箱: xzhanguh@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer