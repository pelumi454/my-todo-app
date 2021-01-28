import {createStore} from 'redux'
import {createStore, compose, applyMiddleWare} from 'redux';
import thunk from 'react-thunk'
import AllReducers from './AllReducers'

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSIONS_COMPOSE_|| compose;

const store = createStore(AllReducers, composeEnhancer(applyMiddleWare(thunk)))

export default store;