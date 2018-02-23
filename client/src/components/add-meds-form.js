import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import AddMedsInput from './add-meds-input';
import {addMedication} from '../actions/patient';



export class AddMedsForm extends React.Component {

  onSubmit(values) {
      return this.props.dispatch(addMedication(values))
  }

  render() {
    console.log('Enter AddMedsForm component');
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
              className="add-meds-form"
              onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
              )}>
              {error}
              <label htmlFor="medName">Medication Name</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="medName"
                  id="medName"
              />
              <label htmlFor="medDosage">Dosage</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="medDosage"
                  id="medDosage"
              />
              <label htmlFor="medSchedule">Schedule</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="medSchedule"
                  id="medSchedule"
              />
              <label htmlFor="pharmName">Pharmancy Name</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="pharmName"
                  id="pharmName"
              />
              <label htmlFor="pharmAddr">Pharmacy Address</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="pharmAddr"
                  id="pharmAddr"
              />
              <label htmlFor="pharmPhone">Pharmacy Phone Number</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="pharmPhone"
                  id="pharmPhone"
              />
              <label htmlFor="physicianName">Physician Name</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="physicianName"
                  id="physicianName"
              />
              <label htmlFor="physicianAddr">Physician Address</label>
              <Field
                  component={AddMedsInput}
                  type="text"
                  name="physicianAddr"
                  id="physicianAddr"
              />
              <label htmlFor="physicianPhone">Physician Phone Number</label>
              <Field
                  component={AddMedsInput}
                  type="text"
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
  form: 'addMedsForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('medName', 'medDosage'))
})(AddMedsForm);
