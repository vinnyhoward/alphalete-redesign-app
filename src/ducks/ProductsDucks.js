import axios from 'axios';

const initialState = {
  products: []
}


const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
// const GET_SINGLE_VIEW = 'GET_SINGLE_VIEW'
//MENS 
const GET_MENS_PRODUCTS = 'GET_MENS_PRODUCTS'
const GET_MENS_ASC = 'GET_MENS_ASC'
const GET_MENS_DESC = 'GET_MENS_DESC'
const GET_MENS_PRICE_LOW_HIGH = 'GET_MENS_PRICE_LOW_HIGH'
const GET_MENS_PRICE_HIGH_LOW = 'GET_MENS_PRICE_HIGH_LOW'
//WOMENS
const GET_WOMANS_PRODUCTS = 'GET_WOMANS_PRODUCTS'
const GET_WOMANS_ASC = 'GET_WOMANS_ASC'
const GET_WOMANS_DESC = 'GET_WOMANS_DESC'
const GET_WOMANS_PRICE_LOW_HIGH = 'GET_WOMANS_PRICE_LOW_HIGH'
const GET_WOMANS_PRICE_HIGH_LOW = 'GET_WOMANS_PRICE_HIGH_LOW'

//MENS//MENS//MENS//MENS//MENS//MENS//MENS//MENS//MENS//MENS

export function getAllProducts() {
  const products = axios.get(`/api/getproducts/all`)
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_ALL_PRODUCTS,
    payload: products 
  }
}


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
  }) 
  return {
    type: GET_MENS_ASC,
    payload: products 
  }
}


export function getMensDesc() {
  const products = axios.get('/api/getproducts/mens-desc')
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_MENS_DESC,
    payload: products 
  }
}


export function getMensLowHigh() {
  const products = axios.get('/api/getproducts/mens-price-low-high')
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_MENS_PRICE_LOW_HIGH,
    payload: products 
  }
}

export function getMensHighLow() {
  const products = axios.get('/api/getproducts/mens-price-high-low')
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_MENS_PRICE_HIGH_LOW,
    payload: products 
  }
}

//WOMANS//WOMANS//WOMANS//WOMANS//WOMANS//WOMANS//WOMANS//WOMANS//WOMANS

export function getAllWomansProducts() {
  const products = axios.get(`/api/getproducts/womans`)
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_WOMANS_PRODUCTS,
    payload: products 
  }
}

export function getWomansAsc() {
  const products = axios.get('/api/getproducts/womans-asc')
  .then(res => {
    return res.data
  })
  return {
    type: GET_WOMANS_ASC,
    payload: products 
  }
}


export function getWomansDesc() {
  const products = axios.get('/api/getproducts/womans-desc')
  .then(res => {
    return res.data
  }) // 
  return {
    type: GET_WOMANS_DESC,
    payload: products 
  }
}


export function getWomansLowHigh() {
  const products = axios.get('/api/getproducts/womans-price-low-high')
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_WOMANS_PRICE_LOW_HIGH,
    payload: products 
  }
}

export function getWomansHighLow() {
  const products = axios.get('/api/getproducts/womans-price-high-low')
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_WOMANS_PRICE_HIGH_LOW,
    payload: products 
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_PRODUCTS + '_FULFILLED':
    return Object.assign({}, state, {products: action.payload})
// MENS SET STATE
    case GET_MENS_PRODUCTS + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) // MENS //Merges the new object "{}" to state(which is the empty array of) and the new object from action.payload

    case GET_MENS_ASC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_MENS_DESC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_MENS_PRICE_LOW_HIGH + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_MENS_PRICE_HIGH_LOW + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_WOMANS_PRODUCTS + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) //WOMANS

    case GET_WOMANS_ASC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_WOMANS_DESC + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_WOMANS_PRICE_LOW_HIGH + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 

    case GET_WOMANS_PRICE_HIGH_LOW + '_FULFILLED':
      return Object.assign({}, state, {products: action.payload}) 


  
    default:
      return state;
  }
  }

  //'/api/getproducts/mens-price-low-high' app.get('/api/getproducts/mens-price-high-low', ctrl.filterMensByHighLow); '/api/getproduct/all-products'