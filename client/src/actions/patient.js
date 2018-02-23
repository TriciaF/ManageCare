import { API_BASE_URL } from '../config';


export const PATIENTLIST_REQUEST_SENT = 'PATIENTLIST_REQUEST_SENT';
export const patientListRequestSent = (loading) => ({
    type: PATIENTLIST_REQUEST_SENT,
    loading
});

export const GET_PATIENTLIST_SUCCESS = 'GET_PATIENTLIST_SUCCESS';
export const getPatientListSuccess = (patientList, loading) => ({
    type: GET_PATIENTLIST_SUCCESS,
    patientList,
    loading
});

export const GET_PATIENTLIST_ERROR = 'GET_PATIENTLIST_ERROR';
export const getPatientListError = (error) => ({
    type: GET_PATIENTLIST_ERROR,
    error
});
export const SET_PATIENT_DASHBOARD = 'SET_PATIENT_DASHBOARD';
export const setPatientDashboard = (currentPatient, patientDashboard) => ({
    type: SET_PATIENT_DASHBOARD,
    currentPatient,
    patientDashboard
});

export const GET_PATIENT_DASHBOARD = 'GET_PATIENT_DASHBOARD';
export const getPatientDashboard = (patientDashboard) => ({
    type: GET_PATIENT_DASHBOARD,
    patientDashboard
});

export const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';
export const updatePatientSuccess = (error, addMedication, addPatient) => ({
    type: UPDATE_PATIENT_SUCCESS,
    error,
    addMedication,
    addPatient
});

export const UPDATE_PATIENT_ERROR = 'UPDATE_PATIENT_ERRORR';
export const updatePatientError = (error) => ({
    type: UPDATE_PATIENT_ERROR,
    error
});

export const ADD_MEDICATION = 'ADD_MEDICATION';
export const addMedication = (patientDashboard, addMedication) => ({
    type: ADD_MEDICATION,
    patientDashboard,
    addMedication
});

export const REMOVE_MEDICATION = 'REMOVE_MEDICATION';
export const removeMedication = (patientDashboard) => ({
    type: REMOVE_MEDICATION,
    patientDashboard
});

export const UPDATE_PATEINT = 'UPDATE_PATEINT';
export const updatePatient = (patientDashboard) => ({
    type: UPDATE_PATEINT,
    patientDashboard
});

export const ADD_NEW_PATIENT = 'ADD_NEW_PATIENT';
export const addNewPatient = (patientList, addPatient) => ({
    type: ADD_NEW_PATIENT,
    patientList,
    addPatient
});

export const SHOW_MEDS_ADD_FORM = 'SHOW_MEDS_ADD_FORM';
export const showMedsAddForm = (showMedsAddForm) => ({
    type: SHOW_MEDS_ADD_FORM,
    showMedsAddForm
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


//update the local store to add medication, 
//then update the patient database with new medication
export const addToDashboard = (values) => dispatch => {
        console.log("Enter addToDashboard");
        dispatch(patientListRequestSent());
        const id = values.id;
        return fetch(`${API_BASE_URL}/`+ id , {
                method: 'PUT',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(values)
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
export const removeFromDashboard = (values, currentPatient) => dispatch => {
        console.log("Enter removeFromDashboard ", values, currentPatient);
        dispatch(removeMedication(values));
        dispatch(patientListRequestSent());
        const obj = {"name":currentPatient};
        console.log(obj);
        const id = values.id
        return fetch(`${API_BASE_URL}/` + id, {
                method: 'PUT',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
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
export const addToPatientList = (values) => dispatch => {
        console.log("Enter addToPatientList", values);
        dispatch(patientListRequestSent());
        return fetch(`${API_BASE_URL}/`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(values)
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