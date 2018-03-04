import React from 'react';
import '../index.css';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import PatientInput from './patient-input';
import {addNewPatient} from '../actions/patient';

export class PatientForm extends React.Component {

  onSubmit(values) {
    return this.props.dispatch(addNewPatient(values))
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
            <label htmlFor="name">Name</label>
            <Field
                component={PatientInput}
                type="text"
                name="name"
                id="name"
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
    onSubmitFail: (errors, dispatch) => dispatch(focus('name'))
})(PatientForm);