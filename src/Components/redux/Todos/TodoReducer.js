import {UpdateReducer} from '../Utils'


const fetchStart = (state, action) => {
    return UpdateReducer(state, {
        error: null,
        isLoading: true
    })
}

const fetchSuccess = (state, action) => {
    return UpdateReducer(state, {
        error: null,
        isLoading: false,
        todos: action.todos
    })
}

const fetchFail = (state, action) => {
    return UpdateReducer(state, {
        isLoading: false,
        error: action.error
    })
}