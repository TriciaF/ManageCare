import { PATIENTLIST_REQUEST_SENT, GET_PATIENTLIST_SUCCESS, GET_PATIENTLIST_ERROR, } from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patientList: [],
    };


export default function reducer(state = initialState, action) {
        if (action.type === PATIENTLIST_REQUEST_SENT) {
            return Object.assign({}, state, {
              loading: action.loading
            });
        } else if (action.type === GET_PATIENTLIST_SUCCESS) {
            return Object.assign({}, state, {
                error: false,
                loading: false,
                patientList: [...state.patientList, {
                  name: action.name
                }]
            });
        } else if (action.type === GET_PATIENTLIST_ERROR) {
            return Object.assign({}, state, {
              error: action.error
            });
        } else
            return state;

    } //end patientReducer