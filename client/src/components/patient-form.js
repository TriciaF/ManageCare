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
            <Field
                component={PatientInput}
                type="text"
                name="name"
                id="name"
                placeholder="patient name"
                validate={[required, nonEmpty]}
            />
            <Field
                component={PatientInput}
                type="medication"
                name="medication"
                id="medication"
                placeholder="medication"
                validate={[required, nonEmpty]}
            />
            <Field
                component={PatientInput}
                type="dosage"
                name="dosage"
                id="dosage"
                placeholder="dosage"
            />
            <Field
                component={PatientInput}
                type="schedule"
                name="schedule"
                id="schedule"
                placeholder="schedule"
            />
            <Field
                component={PatientInput}
                type="pharmacyName"
                name="pharmacyName"
                id="pharmacyName"
                placeholder="pharmacy name"
            />
            <Field
                component={PatientInput}
                type="pharmacyAddr"
                name="pharmacyAddr"
                id="pharmacyAddr"
                placeholder="pharmacy address"
            />
            <Field
                component={PatientInput}
                type="pharmacyPhone"
                name="pharmacyPhone"
                id="pharmacyPhone"
                placeholder="pharmacy phone number"
            />
            <Field
                component={PatientInput}
                type="physicianName"
                name="physicianName"
                id="physicianName"
                placeholder="physician's name"
            />
            <Field
                component={PatientInput}
                type="physicianAddr"
                name="physicianAddr"
                id="physicianAddr"
                placeholder="physician's address"
            />
            <Field
                component={PatientInput}
                type="physicianPhone"
                name="physicianPhone"
                id="physicianPhone"
                placeholder="physician's phone number"
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