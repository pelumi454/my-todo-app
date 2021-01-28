import {createStore} from 'redux'
import {allReducer} from './AllReducers'

const store = createStore(allReducer);

export default store;