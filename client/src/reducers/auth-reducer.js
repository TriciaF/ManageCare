import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOGOUT_WARNING,
    LOGOUT,
    SHOW_LOGIN_FORM
} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null,
    logoutWarning: false,
    loggedIn: false,
    showLoginForm: false
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null,
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser,
            loggedIn: true,
            showLoginForm: false
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LOGOUT_WARNING) {
        console.log('logout warning');
        return Object.assign({}, state, {
            logoutWarning: true
        });
    } else if (action.type === LOGOUT) {
      console.log('logout');
      return Object.assign({}, state, {
          loggedIn: false
      });
    } else if (action.type === SHOW_LOGIN_FORM) {
        return Object.assign({}, state, {
            showLoginForm: true
        });
    } else return state;
}