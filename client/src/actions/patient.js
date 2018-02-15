import { API_BASE_URL } from '../config';


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
})
export const SET_CURRENT_PATIENT = 'SET_CURRENT_PATIENT';
export const setCurrentPatient = (currentPatient) => ({
    type: SET_CURRENT_PATIENT,
    currentPatient
})

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