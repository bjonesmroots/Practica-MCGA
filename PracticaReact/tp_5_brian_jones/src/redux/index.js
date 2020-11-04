import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'

const initialStore = {
    isFetchingUsers: false,
    fail: false,
    lista: [],
}

export const addUser = (name, email) => {
    return {
        type: 'ADD_USER',
        name: name,
        email: email
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersPending());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            return dispatch(fetchUsersSuccess(data));
        }
        catch (error) {
            return dispatch(fetchUsersFail(error.toString()));
        }
    }
}

export const fetchUsersPending = () => {
    return {
        type: "FETCH_USERS_PENDING",
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: data,
    }
}

export const fetchUsersFail = (error) => {
    return {
        type: "FETCH_USERS_FAIL",
        payload: error,
    }
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS': {
            return {
                ...store,
                lista: action.payload,
                isFetchingUsers: false,
            };
        }
        case 'FETCH_USERS_PENDING': {
            return {
                ...store,
                isFetchingUsers: true,
            };
        }
        case 'FETCH_USERS_FAIL': {
            return {
                ...store,
                isFetchingUsers: false,
                fail: true,
            };
        }
        case 'ADD_USER': {
            const newUsers = [...store.lista]
            newUsers.push({
                id: Date.now(),
                name: action.name,
                email: action.email
            })
            return {
                lista: newUsers
            };
        }
        default:
            return store;
    }
}

const rootReducer = combineReducers({
    users: reducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
