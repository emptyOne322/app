import React, { useState, useEffect, useCallback} from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import tryParse from './json_try_parse'
import { STORAGE_NAME } from './constants'

const Basket = () => {
  const [value] = useState(
    () => tryParse(localStorage.getItem(STORAGE_NAME))
  );

  const basketList = useSelector((state) => {
    return (value || []).reduce((acc, item) => {
      const i = state.list.find(i => i.id == item)
      if(state.list.find(i => i.id == item)) {
          acc.push(i)
      }
      return acc
    }, [])
  })
  let v = value || []
  const remove = useCallback((id) => () => {
    const list = tryParse(localStorage.getItem(STORAGE_NAME)) || []
  }, [v.length])

  useEffect(() => {
    v = tryParse(localStorage.getItem(STORAGE_NAME)) || []
  }, [v.length]);

  console.log(value);
  console.log(basketList);
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
