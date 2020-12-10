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


export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginFetching());
        fetch("http://localhost:3001/auth/login", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            }).then((response) => {
                if (response.status === 200) {
                    console.log('Usuario Logueado');
                    return response.json();
                } else {
                    throw response;
                }
            }).then((data) => {
                dispatch(loginSuccess(data))
            }).catch((error) => {
                console.log(error);
                dispatch(loginError())
            });
    }
}

export const reducer = (store = initialStore, action) => {
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
                user: action.payload,
                logged: true,
            };
        }
        case LOGIN_ERROR: {
            return {
                ...store,
                isFetching: false,
                error: action.payload,
                logged: false,
            };
        }
        default:
            return store;
    }
}