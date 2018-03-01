// import jwtDecode from 'jwt-decode';
import { LOGIN_URL } from '../config';



export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (currentUser, loggedIn, showLoginForm) => ({
    type: AUTH_SUCCESS,
    currentUser,
    loggedIn,
    showLoginForm
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = (error) => ({
    type: AUTH_ERROR,
    error
});

export const LOGOUT_WARNING = 'LOGOUT_WARNING';
export const logoutWarning = (logoutWarning) => ({
    type: LOGOUT_WARNING,
    logoutWarning
});

export const LOGOUT = 'LOGOUT';
export const logOut = (loggedIn) => ({
    type: LOGOUT,
    loggedIn
});

export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const showLoginForm = () => ({
    type: SHOW_LOGIN_FORM,
    showLoginForm
});


// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
// const storeAuthInfo = (authToken, dispatch) => {
//     const decodedToken = jwtDecode(authToken);
//     dispatch(setAuthToken(authToken));
//     dispatch(authSuccess(decodedToken.user));
//     saveAuthToken(authToken);
// };

//does not save token to local storage
// const storeAuthInfo = (authToken, dispatch) => {
//     const decodedToken = jwtDecode(authToken);
//     dispatch(setAuthToken(authToken));
//     dispatch(authSuccess(decodedToken.user));
// };

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return fetch(`${LOGIN_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json();
        })
        .then(user => {
            dispatch(authSuccess(user))
        })
        .catch(err => {
            dispatch(authError(err))
        })
};