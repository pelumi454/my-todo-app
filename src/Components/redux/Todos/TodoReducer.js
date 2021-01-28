import {UpdateReducer} from '../Utils'


export const fetchStart = (state, action) => {
    return UpdateReducer(state, {
        error: null,
        isLoading: true
    })
}

export const fetchSuccess = (state, action) => {
    return UpdateReducer(state, {
        error: null,
        isLoading: false,
        todos: action.todos
    })
}

export const fetchFail = (state, action) => {
    return UpdateReducer(state, {
        isLoading: false,
        error: action.error
    })
}