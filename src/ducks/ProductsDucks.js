import axios from 'axios';

const initialState = {
  products: [],
  cart: [],
  user: {}
}

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_USER = 'GET_USER'
export const ADD_TO_CART = 'ADD_TO_CART '
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS'
// const GET_SINGLE_VIEW = 'GET_SINGLE_VIEW'
//MENS 
const GET_MENS_PRODUCTS = 'GET_MENS_PRODUCTS'
const GET_MENS_ASC = 'GET_MENS_ASC'
const GET_MENS_DESC = 'GET_MENS_DESC'
const GET_MENS_PRICE_LOW_HIGH = 'GET_MENS_PRICE_LOW_HIGH'
const GET_MENS_PRICE_HIGH_LOW = 'GET_MENS_PRICE_HIGH_LOW'
//WOMANS
const GET_WOMANS_PRODUCTS = 'GET_WOMANS_PRODUCTS'
const GET_WOMANS_ASC = 'GET_WOMANS_ASC'
const GET_WOMANS_DESC = 'GET_WOMANS_DESC'
const GET_WOMANS_PRICE_LOW_HIGH = 'GET_WOMANS_PRICE_LOW_HIGH'
const GET_WOMANS_PRICE_HIGH_LOW = 'GET_WOMANS_PRICE_HIGH_LOW'


export function getUser() {
  const user = axios.get('/auth/user').then(res => {
    return res.data
  })
}

export function addToCart(product) {
  console.log(product);
  return {
    type: ADD_TO_CART,
    payload: axios.post('/api/cart', {
      productid: product, 
      userid: 1
    }).then((cart) => { //Could be a problem later on with tables //userid is from orders table
      return cart.data
    }).catch( err => console.log(err))
  }
}

export function removeFromCart(productIndex) {
  return {
    type: REMOVE_FROM_CART,
    payload: productIndex
  }
}



//CARTATTEMPT//CARTATTEMPT//CARTATTEMPT//CARTATTEMPT//CARTATTEMPT//CARTATTEMPT


//SEARCH//SEARCH//SEARCH//SEARCH//SEARCH//SEARCH//SEARCH//SEARCH

export function getSearchProducts(q) {
  const products = axios.get(`/api/getproducts/search?q=${q}`)
  .then(res => {
    return res.data
  }) 
  return {
    type: GET_SEARCH_PRODUCTS,
    payload: products 
  }
}

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
  
  console.log("Reducer fired");
  console.log("State:", state);
  console.log("Action:", action);

  switch (action.type) {







    case GET_USER + '_FULFILLED':
    return Object.assign({}, state, {user: action.payload})

    case GET_PRODUCTS + '_FULFILLED':
    return Object.assign({}, state, {products: action.payload})
   
    case ADD_TO_CART + '_FULFILLED':
    return Object.assign({}, state, {cart: action.payload})

    case REMOVE_FROM_CART+ '_FULFILLED':
      let newArray = state.cart.slice();
      newArray.splice(action.payload, 1);
    return Object.assign({}, state, {cart: newArray})







    case GET_ALL_PRODUCTS + '_FULFILLED':
    return Object.assign({}, state, {products: action.payload})

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

//   //'/api/getproducts/mens-price-low-high' app.get('/api/getproducts/mens-price-high-low', ctrl.filterMensByHighLow); '/api/getproduct/all-products'