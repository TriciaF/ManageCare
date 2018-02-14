import { PATIENTLIST_REQUEST_SENT, GET_PATIENTLIST_SUCCESS, GET_PATIENTLIST_ERROR, } from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patientList: [],
    },



export const patientReducer = (state = initialState, action) => {

        if (action.type === PATIENTLIST_REQUEST_SENT) {
            return Object.assign({}, state, {
              loading: action.loading
            });
        } else if (action.type === GET_PATIENTLIST_SUCCESS) {
          console.log('This is the action: ', action);
            return Object.assign({}, state, {
                error = false,
                loading = false,
                patientList: action.patientList
            });
        } else if (action.type === GET_PATIENTLIST_ERRORR) {
            return Object.assign({}, state, {
              error: action.error
            });
        } else
            return state;

    } //end patientReducer