import * as actionTypes from './TodoActionTypes'
import {axios} from 'axios'
const endpoint = "https://adeleke-todo-list.herokuapp.com/"

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        payload: error
    }
}

export const fetchSuccess = (todos) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
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

export const deleteTodos = (id) => {
    return dispatch => {
        axios.get(`$(endpoint)/$(id)`).then(
            res => {const todos = res.data;
            dispatch(fetchSuccess(todos))}
        ).catch ((error) => {
            dispatch(fetchFail(error))
        })
    }
}