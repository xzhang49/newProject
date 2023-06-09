import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-red">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">我的链接</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">关于我们</a></li>
                        <li><a href = "/contact" className = "fs-15">联系我们</a></li>
                        <li><a href = "faq" className = "fs-15">回答问题</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>政策法规</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">条款条例</a></li>
                        <li><a href = "/cookies" className = "fs-15">行业政策</a></li>
                        <li><a href = "/policy" className = "fs-15">数据法规</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>关于商店</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">公司信息</a></li>
                        <li><a href = "/cookies" className = "fs-15">分支机构</a></li>
                        <li><a href = "/policy" className = "fs-15">店铺信息</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>联系我们</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+678 004 5754</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">info@shophub.com</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-house"></i></span>
                            <span className = "fs-15">Houston, TX 77027</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer