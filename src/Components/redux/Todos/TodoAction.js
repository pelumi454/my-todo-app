import {axios} from 'axios'
const endpoint = "https://adeleke-todo-list.herokuapp.com/"

export const fetchStart = () => {
    return {
        type: 'FETCH_START'
    }
}

export const fetchFail = (error) => {
    return {
        type: 'FETCH_FAIL',
        payload: error
    }
}

export const fetchSuccess = (todos) => {
    return {
        type: 'FETCH_SUCCESS',
        payload: todos
    }
}

export const fetchTodos = () => {
    return dispatch => {
        dispatch (fetchStart())
        axios.get(`$(endpoint)/todos`).then(
            res => { const todos = res.data;
            dispatch(fetchSuccess(todos))}
        ).catch ((error) => {
            dispatch(fetchFail(error))
        })
    }
}
