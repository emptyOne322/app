import React, {useEffect, useState} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {useDispatch } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'

import Layout from './Layout'
import ProductList from './ProductList'
import Product from './Product'
import Basket from './Basket'
import { fetchData } from './actions'

import ParseJSON from './json_parse'
import { STORAGE_NAME } from './constants'

const AppRouter = () => {

  const [value, setValue] = useState(ParseJSON(localStorage.getItem(STORAGE_NAME)));
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchData())
  })

  useEffect(() => {
    console.log(value);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(value));
  }, [value]);
  return (
    <BrowserRouter >
      <Layout />
      <Container>
        <Row>
          <Col md="10">
            <Switch>
              <Route path="/" exact><ProductList addtoBasket={setValue} /></Route>
              <Route path="/product/:id"><Product addtoBasket={setValue}/></Route>
            </Switch>
          </Col>
          <Col md="2">
            <Basket addtoBasket={setValue} value={value}/>
          </Col>

        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter
