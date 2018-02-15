import { PATIENTLIST_REQUEST_SENT, 
        GET_PATIENTLIST_SUCCESS, 
        GET_PATIENTLIST_ERROR, 
        SET_CURRENT_PATIENT } from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patientList: [],
    currentPatient: null
};


export default function reducer(state = initialState, action) {
    if (action.type === PATIENTLIST_REQUEST_SENT) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === GET_PATIENTLIST_SUCCESS) {
      console.log('enter GET_PATIENTLIST_SUCCESS', action.patientList);
        return  Object.assign({}, state, {
            patientList: action.patientList
        });
    } else if (action.type === GET_PATIENTLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_CURRENT_PATIENT) {
      console.log('enter SET_CURRENT_PATIENT', action.currentPatient);
        return Object.assign ( {}, state, {
          currentPatient: action.currentPatient
        });
    }else
        return state;
} //end patientReducer