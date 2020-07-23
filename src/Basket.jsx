import React, { useState, useEffect, useCallback} from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import ParseJSON from './json_parse'
import { STORAGE_NAME } from './constants'

const Basket = ({addtoBasket, value}) => {
  const basketList = useSelector((state) => {
    return value.reduce((acc, item) => {
      const i = state.list.find(i => i.id == item)
      if(state.list.find(i => i.id == item)) {
          acc.push(i)
      }
      return acc
    }, [])
  })

  const remove = useCallback((id) => () => {
    const list = ParseJSON(localStorage.getItem(STORAGE_NAME))
    list.splice(list.findIndex(i => i === id), 1)
    localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
    addtoBasket(list);
  }, [value])
  
  return (
    <div>
      <h4>
        Basket
      </h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            basketList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td><Button onClick={remove(item.id)}>Remove</Button></td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      TOTAL: {basketList.reduce((acc, value) => acc+=value.price, 0)}
    </div>
  )
}

export default Basket
