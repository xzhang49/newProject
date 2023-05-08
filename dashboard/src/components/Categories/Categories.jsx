import React from 'react'
import CreateCategory from "./CreateCategory"
import CategoriesTable from "./CategoriesTable"

const Categories = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <CreateCategory />
            <CategoriesTable />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories