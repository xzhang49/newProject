import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from "../../Redux/Actions/ProductActions"

const ProductCard = ({ keyword, pagenumber, addToCart }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <>
      {products.map((product) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <h6>单价： ${product.price}.00 </h6>
                <h6>库存： {product.count} </h6>
              </Card.Text>
              <Button variant="danger" onClick={() => addToCart(shopItems)}>加入购物车</Button>
            </Card.Body>
          </Card>
        )
      })}
      
    </>
  )
}

export default ProductCard