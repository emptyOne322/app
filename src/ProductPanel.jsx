import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {STORAGE_NAME } from './constants'
import tryParse from './json_try_parse'

const AddToLocalStorage = (value) => () => {
  const basket = tryParse(localStorage.getItem(STORAGE_NAME))  || []
  basket.push(value)
  localStorage.removeItem(STORAGE_NAME)
  localStorage.setItem(STORAGE_NAME, JSON.stringify(basket))
}

const ProductPanel = ({product, type}) => {
  const width = type === 'full'? '100%' : '15rem'
  return (
    <Card style={{ width: width }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Link to={`/product/${product.id}`}>
        <Card.Title>
          {product.title}
        </Card.Title>
      </Link>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Card.Text>
        Price: ${product.price}
      </Card.Text>
      <Button variant="primary" onClick={AddToLocalStorage(product.id)}>Add to basket</Button>
    </Card.Body>
  </Card>
  )

}

export default ProductPanel
