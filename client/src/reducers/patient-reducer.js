import {
    PATIENTLIST_REQUEST_SENT,
    GET_PATIENTLIST_SUCCESS,
    GET_PATIENTLIST_ERROR,
    SET_CURRENT_PATIENT,
    SET_PATIENT_DASHBOARD,
    UPDATE_PATIENT_SUCCESS,
    UPDATE_PATIENT_ERROR,
    ADD_MEDICATION,
    REMOVE_MEDICATION
} from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patientList: [],
    currentPatient: null,
    patientDashboard: null,
};


export default function reducer(state = initialState, action) {
    if (action.type === PATIENTLIST_REQUEST_SENT) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === GET_PATIENTLIST_SUCCESS) {
        console.log('enter GET_PATIENTLIST_SUCCESS', action.patientList);
        return Object.assign({}, state, {
            patientList: action.patientList
        });
    } else if (action.type === GET_PATIENTLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_CURRENT_PATIENT) {
        return Object.assign({}, state, {
            currentPatient: action.currentPatient
        });
    } else if (action.type === UPDATE_PATIENT_SUCCESS) {
        return Object.assign({}, state, {
            error: false
        });
    } else if (action.type === UPDATE_PATIENT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === ADD_MEDICATION) {
        return Object.assign({}, state, {
            patientDashboard: action.patientList
        });
    } else if (action.type === SET_PATIENT_DASHBOARD) {
        console.log('Enter SetPatientDashboard: ', action.patientDashboard);
        return Object.assign({}, state, {
            patientDashboard: action.patientDashboard
        });
    } else if (action.type === REMOVE_MEDICATION) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else
        return state;

} //end patientReducer