import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ shopItems, addToCart }) => {

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={shopItems.cover} />
            <Card.Body>
              <Card.Title>{shopItems.name}</Card.Title>
              <Card.Text>
                <h6>单价： ${shopItems.price}.00 </h6>
                <h6>库存： 0 </h6>
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