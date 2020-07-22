import axios from 'axios'

import { UPDATE } from './store/constants'



export const fetchData =  () => async (dispatch, getState) => {
  const res = await axios.get('https://fakestoreapi.com/products')
  dispatch({type: UPDATE, payload: res.data })
}
