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
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input 
                      type="number" 
                      placeholder='Type here'
                      className='form-control'
                      id="product_price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder='Type here'
                      className='form-control'
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className='form-control'
                      type="text" 
                      placeholder='Enter Image URL'
                    />
                    <input className='form-control mt-3' type="file" />
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