import React from 'react';
import '../index.css';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import PatientInput from './patient-input';
import {createPatientDashboard} from '../actions/patient';

export class PatientForm extends React.Component {

  onSubmit(values) {
    console.log('onSubmit values',values);
    const patientName = {
      firstname: values.firstname,
      lastname: values.lastname
    };
    const medication = {
      name: values.medication,
      dosage: values.dosage,
      schedule: values.schedule
    };
    const pharmacy = {
      name: values.pharmacyName,
      address: values.pharmacyAddr,
      phoneNumber: values.pharmacyPhone
    };
    const physician = {
      name: values.physicianName,
      address: values.physicianAddr,
      phoneNumber: values.physicianPhone
    };
    console.log('onSumit: ',patientName, medication, pharmacy, physician);
    return this.props.dispatch(createPatientDashboard(patientName, medication, pharmacy, physician));
}

render() {
    let error;
    if (this.props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }
    return (
        <form
            className="patient-form"
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
            {error}
            <label htmlFor="firstname">Firstname</label>
            <Field
                component={PatientInput}
                type="text"
                name="firstname"
                id="firstname"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="lastname">Lastname</label>
            <Field
                component={PatientInput}
                type="text"
                name="lastname"
                id="lastname"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="medication">Medication</label>
            <Field
                component={PatientInput}
                type="medication"
                name="medication"
                id="medication"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="dosage">Dosage</label>
            <Field
                component={PatientInput}
                type="dosage"
                name="dosage"
                id="dosage"
            />
            <label htmlFor="schedule">Schedule</label>
            <Field
                component={PatientInput}
                type="schedule"
                name="schedule"
                id="schedule"
            />
            <label htmlFor="pharmacyName">Pharmacy Name</label>
            <Field
                component={PatientInput}
                type="pharmacyName"
                name="pharmacyName"
                id="pharmacyName"
            />
            <label htmlFor="pharmacyAddr">Pharmacy Address</label>
            <Field
                component={PatientInput}
                type="pharmacyAddr"
                name="pharmacyAddr"
                id="pharmacyAddr"
            />
            <label htmlFor="pharmacyPhone">Pharmacy Phone Number</label>
            <Field
                component={PatientInput}
                type="pharmacyPhone"
                name="pharmacyPhone"
                id="pharmacyPhone"
            />
            <label htmlFor="physicianName">Physician Name</label>
            <Field
                component={PatientInput}
                type="physicianName"
                name="physicianName"
                id="physicianName"
            />
            <label htmlFor="physicianAddr">Physician Address</label>
            <Field
                component={PatientInput}
                type="physicianAddr"
                name="physicianAddr"
                id="physicianAddr"
            />
            <label htmlFor="physicianPhone">Physician Phone Number</label>
            <Field
                component={PatientInput}
                type="physicianPhone"
                name="physicianPhone"
                id="physicianPhone"
            />
            <button disabled={this.props.pristine || this.props.submitting}>
                Submit
            </button>
        </form>
    );
}
}

  export default reduxForm({
    form: 'patientForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(PatientForm);