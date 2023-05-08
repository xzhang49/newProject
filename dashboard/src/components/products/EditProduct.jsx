import React from 'react'
import { Link } from "react-router-dom"

const EditProduct = (props) => {
    const { productId } = props

    return (
        <>
            <section className="content-main" style={{ maxWidth: "12000px" }}>
                <form>
                    <div className="content-header">
                        <button className='btn btn-danger text-white'>
                            Go to products
                        </button>
                        <h2 className="content-title">Update Product</h2>
                        <button type='submit' className='btn btn-primary'>
                            Publish Now
                        </button>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" className='form-label'>
                                            Product Title
                                        </label>
                                        <input 
                                            type="text"
                                            placeholder='Type here'
                                            className='form-control'
                                            id='product_title'
                                            required
                                            value={productId.name}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className='form-label'>
                                            Price
                                        </label>
                                        <input 
                                            type="number"
                                            placeholder='Type here'
                                            className='form-control'
                                            id='product_price'
                                            required
                                            value={productId.price}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className='form-label'>
                                            Count In Stock
                                        </label>
                                        <input 
                                            type="number"
                                            placeholder='Type here'
                                            className='form-control'
                                            id='product_price'
                                            required
                                            value={productId.price}
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

export default EditProduct