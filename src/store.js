import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducers/reducer'

import { fetchProducts } from "./services/product-service";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

//store.dispatch(fetchProducts())

export default store


