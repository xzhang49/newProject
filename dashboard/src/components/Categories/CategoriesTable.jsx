import React from 'react'
import { Link } from "react-router-dom"

const CategoriesTable = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" value="" />
              </div>
            </td>
            <td>1</td>
            <td>
              <b>Men clothes</b>
            </td>
            <td>Men clothes</td>
            <td className="text-end">
              <Link
                to="#"
                data-bs-toggle="dropdown"
                className='btn btn-light'
              >
                <i className="fas fa-ellipsis-h"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to='#'>
                  Edit info
                </Link>
                <Link className="dropdown-item text-danger" to="#">
                  Delete
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesTable