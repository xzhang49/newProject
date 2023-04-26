import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

const handleLogout = () => {

}

function Dashboard() {
    const navigate = useNavigate()
	axios.defaults.withCredentials = true



    return (
        <div>
            <div className="container-fluid">
		        <div className="row flex-nowrap">
			        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
				        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
					        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
						        <li>
							        <Link to="/" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
								        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">产品</span> </Link>
						        </li>
						        <li>
							        <Link to="order" className="nav-link px-0 align-middle text-white">
								        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">订单</span> </Link>
						        </li>
						        <li>
							        <Link to="inventory" className="nav-link px-0 align-middle text-white">
								        <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">库存</span></Link>
						        </li>
						        <li onClick={handleLogout}>
							        <a href="#" className="nav-link px-0 align-middle text-white">
								        <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">退出</span></a>
						        </li>
					        </ul>
				        </div>
			        </div>
			        <div className="col p-0 m-0">
				        <Outlet />
			        </div>
		        </div> 
	        </div>

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                    <span className="fs-4">Sidebar</span>
                    <hr></hr>
                </a>
            </div>
        </div>
        
    )
}

export default Dashboard