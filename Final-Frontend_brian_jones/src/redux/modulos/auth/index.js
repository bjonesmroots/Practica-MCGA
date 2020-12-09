import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'

const initialStore = {
    isFetching: false,
    logged: false,
    error: '',
    usuario: undefined,
}
const LOGIN_FETCHING = 'LOGIN_FETCHING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'


export const loginFetching = () => {
    return {
        type: LOGIN_FETCHING,
    }
}

export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response,
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error,
    }
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case LOGIN_FETCHING: {
            return {
                ...store,
                isFetching: true,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...store,
                isFetching: false,
                user: action.payload
            };
        }
        case LOGIN_ERROR: {
            return {
                ...store,
                isFetching: false,
                error: action.payload
            };
        }
        default:
            return store;
    }
}