import {UPDATE, CLEAR} from './constants'


const initialState = {
  list: []
}

const reducer = (state, action) =>  {
    switch(action.type) {
        case UPDATE: return {...state,  list: action.payload };
        case CLEAR: return initialState;

        default: return state || initialState;
    }
}

export default reducer
