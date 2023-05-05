import React from 'react'
import { Link } from "react-router-dom"

const AddProduct = () => {
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px "}}>
        <form>
          <div className="content-header">
            <button className="btn btn-danger text-white">
              Go to Products
            </button>
            <h2 className="content-title">Add product</h2>
            <div>
              <button className="btn btn-primary">
                Publish Now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product Title
                    </label>
                    <input 
                      type="text" 
                      placeholder='Type here'
                      className='form-control'
                      id="product_title"
                      required
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddProduct