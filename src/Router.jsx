import React, {useEffect} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {useDispatch } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'

import Layout from './Layout'
import ProductList from './ProductList'
import Product from './Product'
import Basket from './Basket'
import { fetchData } from './actions'


const AppRouter = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchData())
  })
  return (
    <BrowserRouter >
      <Layout />
      <Container>
        <Row>
          <Col md="10">
            <Switch>
              <Route path="/" exact component={ProductList}/>
              <Route path="/product/:id" component={Product} />
            </Switch>
          </Col>
          <Col md="2">
            <Basket />
          </Col>

        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter
