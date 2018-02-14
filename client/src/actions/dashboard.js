import { API_BASE_URL } from '../config';

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const fetchDashboard = () => ({
    type: FETCH_DASHBOARD,
    loading
});

export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const fetchDashboardSuccess = (patientData) => ({
    type: FETCH_DASHBOARD_SUCCESS,
    error,
    patientList
});

export const FETCH_DASHBOARD_ERROR = 'FETCH_DASHBOARD_ERROR';
export const fetchDashboardError = (error) => ({
    type: FETCH_DASHBOARD_ERROR,
    error
});

export const UPDATE_MEDICATION = 'UPDATE_MEDICATION';
export const updateMedication = (medication) => ({
    type: UPDATE_MEDICATION,

});

export const REMOVE_MEDICATION = 'REMOVE_MEDICATION';
export const removeMedication = (medication) => ({
    type: REMOVE_MEDICATION,

});

export const ADD_MEDICATION = 'ADD_MEDICATION';
export const addMedication = (medication) => ({
    type: ADD_MEDICATION,

});


//fetch single patient using the patient id, which is stored in state
export const showPatientDashboard = (id) => dispatch => {
    dispatch(fetchDashboard());
    fetch(`${API_BASE_URL}/id`, {
      method: 'GET',
      headers: {
          'content-Type': 'application/json'
      },
    })//end fetch
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }
        return res.json();
    })
    .then(({patientData}) => dispatch(fetchDashboardSuccess(patientData)))
    .catch( err => {
        dispatch(fetchDashboardError(err));
    });
  } //end showPatientDashboard