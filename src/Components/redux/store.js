import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import AllReducers from './AllReducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(AllReducers, composeEnhancer(applyMiddleware(thunk)))

export default store;