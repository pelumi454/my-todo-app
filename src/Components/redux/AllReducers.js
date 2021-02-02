import * as actionTypes from './Todos/TodoActionTypes'
import {fetchSuccess, fetchStart, fetchFail} from './Todos/TodoReducer'

const InitialState = {
    todos: [],
    error: null,
    isLoading: false
}

const allReducer = (state = InitialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_START:
            return fetchStart (state, action)
        case actionTypes.FETCH_SUCCESS:
            return fetchSuccess (state, action)
        case actionTypes.FETCH_FAIL:
            return fetchFail (state, action)
    }
}

export default allReducer