import {
    PATIENTLIST_REQUEST_SENT,
    GET_PATIENTLIST_SUCCESS,
    GET_PATIENTLIST_ERROR,
    SET_PATIENT_DASHBOARD,
    GET_PATIENT_DASHBOARD,
    UPDATE_PATIENT_SUCCESS,
    UPDATE_PATIENT_ERROR,
    ADD_MEDICATION,
    REMOVE_MEDICATION,
    SHOW_MEDS_ADD_FORM
} from '../actions/patient';

const initialState = {
    loading: false,
    error: null,
    patientList: [],
    currentPatient: null,
    patientDashboard: null,
    showMedsAddForm: false
};


export default function reducer(state = initialState, action) {
    if (action.type === PATIENTLIST_REQUEST_SENT) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === GET_PATIENTLIST_SUCCESS) {
        console.log('enter GET_PATIENTLIST_SUCCESS', action.patientList);
        return Object.assign({}, state, {
            patientList: action.patientList,
            loading: false
        });
    } else if (action.type === GET_PATIENTLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_PATIENT_DASHBOARD) {
      console.log('Enter set patient Dashboard: ', action)
        return Object.assign({}, state, {
            currentPatient: action.currentPatient,
            patientDashboard: {
              id: action.patientDashboard.id,
              name: action.patientDashboard.name,
              medication: action.patientDashboard.medication.map( med => {
                return med;
              })
            }
        });
    } else if(action.type === GET_PATIENT_DASHBOARD) {
      console.log(state.patientDashboard)
        return state.patientDashboard
    
    } else if (action.type === UPDATE_PATIENT_SUCCESS) {
        return Object.assign({}, state, {
            error: false,
            loading: false
        });
    } else if (action.type === UPDATE_PATIENT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === ADD_MEDICATION) {
      console.log("Enter AddMedication action = ", action)
        return Object.assign({}, state, {
            loading: true,
            showMedsAddForm: false, 
            patientDashboard: {
              id: state.patientDashboard.id,
              name: state.patientDashboard.name,
              medication: state.patientDashboard.medication.concat([{
                  name: action.patientDashboard.medName,
                  dosage: action.patientDashboard.medDosage,
                  schedule: action.patientDashboard.medSchedule,
                  pharmacy: {
                      name: action.patientDashboard.pharmName,
                      address: action.patientDashboard.pharmAddr,
                      phoneNumber: action.patientDashboard.pharmPhone
                  },
                  physician: {
                      name: action.patientDashboard.physicianName,
                      address: action.patientDashboard.physicianAddr,
                      phoneNumber: action.patientDashboard.physicianPhone
                  }}])
            }
        });  
    } else if (action.type === REMOVE_MEDICATION) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SHOW_MEDS_ADD_FORM) {
      return Object.assign({}, state, {
          showMedsAddForm: true
      });
    } else
        return state;

} //end patientReducer