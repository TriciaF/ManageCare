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
              loading: action.loading
            });
        } else if (action.type === ADD_PATIENT_SUCCESS) {
          console.log('This is the action: ', action);
            return Object.assign({}, state, {
                error: action.error,
                patient: {
                  name: {
                    firstname: action.name.firstname,
                    lastname: action.name.lastname
                  },
                  medication: {
                    name: action.medication.name,
                    dosage: action.medication.dosage,
                    schedule: action.medication.schedule
                  },
                  pharmacy: {
                    name: action.pharmacy.name,
                    address: action.pharmacy.address,
                    phoneNumber: action.pharmacy.phoneNumber
                  },
                  physician: {
                    name: action.physician.name,
                    address: action.physician.address,
                    phoneNumber: action.physician.phoneNumber
                  },
                }
            });
        } else if (action.type === ADD_PATIENT_ERROR) {
            return Object.assign({}, state, {
              error: action.error
            });
        } else
            return state;

    } //end patientReducer