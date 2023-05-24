import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { PRODUCT_CREATE_RESET } from "../../redux/Constants/ProductConstants"
import { createProduct } from "./../../redux/Actions/ProductActions"
import Toast from "../LoadingError/Toast"
import Message from "../LoadingError/Error"
import Loading from "../LoadingError/Loading"

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0); 
  
  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setTitle("");
      setDescription("");
      setImage("");
      setImageFile("");
      setCategories("");
      setCount(0);
      setPrice(0);
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(title, description, image, category, count, price));
  };

  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px "}}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <button className="btn btn-danger text-white">
              Go to Products
            </button>
            <h2 className="content-title">Add product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish Now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder='Type here'
                      className='form-control'
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className='form-control'
                      type="text" 
                      placeholder='Enter Image URL'
                      value={image}
                      required
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <input 
                      className='form-control mt-3'
                      type="file"
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_categories" className="form-label">
                      Category
                    </label>
                    <input 
                      type="text" 
                      placeholder='Type here'
                      className='form-control'
                      id="product_categories"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_count" className="form-label">
                      Count
                    </label>
                    <input 
                      type="number" 
                      placeholder='Type here'
                      className='form-control'
                      id="product_count"
                      required
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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