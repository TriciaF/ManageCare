import { API_BASE_URL } from '../config';
import patientList from '../components/patient-list';


export const PATIENTLIST_REQUEST_SENT = 'PATIENTLIST_REQUEST_SENT';
export const patientListRequestSent = (loading) => ({
    type: PATIENTLIST_REQUEST_SENT,
    loading
});

export const GET_PATIENTLIST_SUCCESS = 'GET_PATIENTLIST_SUCCESS';
export const getPatientListSuccess = (patientList) => ({
    type: GET_PATIENTLIST_SUCCESS,
    patientList
});

export const GET_PATIENTLIST_ERROR = 'GET_PATIENTLIST_ERROR';
export const getPatientListError = (error) => ({
    type: GET_PATIENTLIST_ERROR,
    error
});
export const SET_CURRENT_PATIENT = 'SET_CURRENT_PATIENT';
export const setCurrentPatient = (currentPatient, patientDashboard) => ({
    type: SET_CURRENT_PATIENT,
    currentPatient,
    patientDashboard
});

export const SET_PATIENT_DASHBOARD = 'SET_PATIENT_DASHBOARD';
export const setPatientDashboard = (patientDashboard) => ({
    type: SET_PATIENT_DASHBOARD,
    patientDashboard
});

export const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';
export const updatePatientSuccess = (patientList) => ({
    type: UPDATE_PATIENT_SUCCESS,
    patientList
});

export const UPDATE_PATIENT_ERROR = 'UPDATE_PATIENT_ERRORR';
export const updatePatientError = (error) => ({
    type: UPDATE_PATIENT_ERROR,
    error
});

export const ADD_MEDICATION = 'ADD_MEDICATION';
export const addMedication = (patientList) => ({
    type: ADD_MEDICATION,
    patientList
});

export const REMOVE_MEDICATION = 'REMOVE_MEDICATION';
export const removeMedication = (patientList) => ({
    type: REMOVE_MEDICATION,
    patientList
});


//fetch list of all patients, medications, pharmacy and physician
export const getPatientList = () => (dispatch) => {
    console.log('entered async action getPatientList');
    dispatch(patientListRequestSent());
    return fetch(`${API_BASE_URL}`, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(list => {
            console.log('This is the list back from fetch: ', list);
            dispatch(getPatientListSuccess(list));
        })
        .catch(err => {
            dispatch(getPatientListError());
        })
}


//update the local store and add medication, then update the patient database
export const addToDashboard = (id) => dispatch => {
        console.log("Enter addToDashboard");
        dispatch(patientListRequestSent());
        // dispatch(addMedication(patientDashboard));
        // const id = state.patientDashboard.id;
        return fetch(`${API_BASE_URL}/id`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                // body: JSON.stringify(obj)
            }) //end fetch
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText)
                }
                return res.json();
            })
            .then(({ patientData }) => dispatch(updatePatientSuccess(patientData)))
            .catch(err => {
                dispatch(updatePatientError(err));
            });
    } //end addMedication


//update the local store to remove medication, then update the patient database
export const removeFromDashboard = (id) => dispatch => {
        console.log("Enter removeFromDashboard");
        dispatch(patientListRequestSent());
        dispatch(removeMedication(patientList));
        return fetch(`${API_BASE_URL}/id`, {
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json'
                },
            }) //end fetch
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText)
                }
                return res.json();
            })
            .then(({ patientData }) => dispatch(updatePatientSuccess(patientData)))
            .catch(err => {
                dispatch(updatePatientError(err));
            });
    } //end removeMedication


//update the local store with updated patient information, then update the patient database
export const updateDashboard = (id) => dispatch => {
        console.log("Enter updateDashboard");
        dispatch(patientListRequestSent());
        return fetch(`${API_BASE_URL}/id`, {
                method: 'PUT',
                headers: {
                    'content-Type': 'application/json'
                },
            }) //end fetch
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText)
                }
                return res.json();
            })
            .then(({ patientData }) => dispatch(updatePatientSuccess(patientData)))
            .catch(err => {
                dispatch(updatePatientError(err));
            });
    } //end updatePatient