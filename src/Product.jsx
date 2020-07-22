import React from 'react'
import {useSelector} from 'react-redux'

import ProductPanel from './ProductPanel'


const Product = ({match}) => {
  const product = useSelector(state => state.list.find((item) => item.id == match.params.id)) || {}
  return <ProductPanel product={product} type="full"/>
}

export default Product
