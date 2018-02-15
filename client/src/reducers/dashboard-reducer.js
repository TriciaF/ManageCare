import {
    FETCH_DASHBOARD,
    FETCH_DASHBOARD_SUCCESS,
    FETCH_DASHBOARD_ERROR,
    UPDATE_MEDICATION,
    REMOVE_MEDICATION,
    ADD_MEDICATION
} from '../actions/patient';


const initialState = {
    loading: false,
    error: false,
    patientList: []
};

export default function showDashboardReducer(state = initialState, action) {

    if (action.type === FETCH_DASHBOARD) {
        return Object.assign({}, state, { loading: action.loading });
    } else if (action.type === FETCH_DASHBOARD_SUCCESS) {
        return Object.assign({}, state, {
            error: false,
            patientList: [...state.patientList, {
                id: action.id,
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
                    phoneNumber: pharmacy.phoneNumber
                },
                physician: {
                    name: action.physician.name,
                    address: action.physician.address,
                    phoneNumber: action.physician.phoneNumber
                },
            }]
        });
    } else if (action.type === FETCH_DASHBOARD_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === UPDATE_MEDICATION) {
        return Object.assign({}, state, {
            patientList: [...state.patientList, {
                medication: {
                    name: action.medication.name,
                    dosage: action.medication.dosage,
                    schedule: action.medication.schedule
                },
            }]
        });
    } else if (action.type === REMOVE_MEDICATION) {
        return Object.assign({}, state, {

        });
    } else if (action.type === ADD_MEDICATION) {
        return Object.assign({}, state, {
            patientList: [...state.patientList, {
                medication: {
                    name: action.medication.name,
                    dosage: action.medication.dosage,
                    schedule: action.medication.schedule
                },
                pharmacy: {
                    name: action.pharmacy.name,
                    address: action.pharmacy.address,
                    phoneNumber: pharmacy.phoneNumber
                },
                physician: {
                    name: action.physician.name,
                    address: action.physician.address,
                    phoneNumber: action.physician.phoneNumber
                },
            }]

        });
    } else
        return state;

} //end patientReducer