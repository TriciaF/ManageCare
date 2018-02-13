import { PATIENT_FORM_SUBMIT, ADD_PATIENT_SUCCESS, ADD_PATIENT_ERROR } from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patient: {
        name: {
            firstname: String,
            lastname: String
        },
        medication: {
            name: String,
            dosage: String,
            schedule: String
        },
        pharmacy: {
            name: String,
            address: String,
            phoneNumber: String
        },
        physician: {
            name: String,
            address: String,
            phoneNumber: String
        },
    }
};

export const patientReducer = (state = initialState, action) => {

        if (action.type === PATIENT_FORM_SUBMIT) {
            return Object.assign({}, state, {
                authToken: action.authToken
            });
        } else if (action.type === ADD_PATIENT_SUCCESS) {
            return Object.assign({}, state, {

            });
        } else if (action.type === ADD_PATIENT_ERROR) {
            return Object.assign({}, state, {

            });
        } else
            return state;

    } //end patientReducer