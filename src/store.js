import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/ProductsDucks'; //reducer is the beginning "filter" for the store, and the store is not a react function but a "redux" one
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promiseMiddleware())); // Nested imports from up above, to use the middlware