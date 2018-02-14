import { API_BASE_URL } from '../config';


export const PATIENT_FORM_SUBMIT = 'PATIENT_FORM_SUBMIT';
export const patientFormSubmit = () => ({
    type: PATIENT_FORM_SUBMIT
});

export const ADD_PATIENT_SUCCESS = 'ADD_PATIENT_SUCCESS';
export const addPatientSuccess = patient => ({
    type: ADD_PATIENT_SUCCESS,
    patient
});

export const ADD_PATIENT_ERROR = 'ADD_PATIENT_ERROR';
export const addPatientError = error => ({
    type: ADD_PATIENT_ERROR,
    error
})


export const createPatientDashboard = (patientName, medication, pharmacy, physician) => dispatch => {
    console.log('entered async action patientStore');
    dispatch(patientFormSubmit());
    return (
        fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                patientName,
                medication,
                pharmacy,
                physician
            })
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(patient => {
            dispatch(addPatientSuccess(patient));
        })
        .catch(err => {
            dispatch(addPatientError());
        })
    )
}