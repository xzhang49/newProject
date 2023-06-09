import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const styles = {
  cardImage: {
    objectFit: 'cover',
    height: '25vh'
  }
}

const ProductCard = ({key, title, image, price, count}) => {
  return (
    <Card style={{ width: '24rem', margin: '2rem 0' }} key={key}>
      <Card.Img variant="top" src={image} style={styles.cardImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          单价： ${price}.00
        </Card.Text>
        <Card.Text>
          库存： {count}
        </Card.Text>
        <Button variant="danger">加入购物车</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard