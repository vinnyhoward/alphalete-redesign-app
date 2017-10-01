import axios from 'axios';

const initialState = {
  products: []
}


const GET_MENS_PRODUCTS = 'GET_MENS_PRODUCTS'
const GET_MENS_ASC = 'GET_MENS_ASC'
const GET_MENS_DESC = 'GET_MENS_DESC'


export function getAllMensProducts() {
  const products = axios.get(`/api/getproducts/mens`)
  .then(res => {
    return res.data
  }) // Function to be passed into the payload - the returned object of action
  return {
    type: GET_MENS_PRODUCTS,
    payload: products // Object being returned
  }
}


export function getMensAsc() {
  const products = axios.get('/api/getproducts/mens-asc')
  .then(res => {
    return res.data
  }) // Function to be passed into the payload - the returned object of action
  return {
    type: GET_MENS_ASC,
    payload: products // Object being returned
  }
}


export function getMensDesc() {
  const products = axios.get('/api/getproducts/mens-desc')
  .then(res => {
    return res.data
  }) // Function to be passed into the payload - the returned object of action
  return {
    type: GET_MENS_DESC,
    payload: products // Object being returned
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_MENS_PRODUCTS + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) //Merges the new object "{}" to state(which is the empty array of) and the new object from action.payload

    case GET_MENS_ASC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) //Merges the new object "{}" to state(which is the empty array of) and the new object from action.payload

    case GET_MENS_DESC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) //Merges the new object "{}" to state(which is the empty array of) and the new object from action.payload

  
    default:
      return state;
  }
  }

  