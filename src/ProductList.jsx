import React from 'react'
import {useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

import ProductPanel from './ProductPanel'

const ProductList = ({addtoBasket}) => {
  const products = useSelector((state) => state.list) || []
  return (
    <div>
      <h4>Products List</h4>
      <Row>
        {products.map((item) =>
          <Col md="auto" key={item.id}>
            <ProductPanel  product={item} addtoBasket={addtoBasket} />
          </Col>
          )}
      </Row>

    </div>
  )
}

export default ProductList
