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
        <div className="add-med-form">
          <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            {error}
            <ul className="add-med-outer">
                <li>
                    <label htmlFor="medName">Medication Name</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="medName"
                        id="medName"
                        placeholder="Enter medication name here"
                    />
                </li>
                <li>
                    <label htmlFor="medDosage">Dosage</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="medDosage"
                        id="medDosage"
                        placeholder="Enter medication dosage here"
                    />
                </li>
                <li>
                    <label htmlFor="medSchedule">Schedule</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="medSchedule"
                        id="medSchedule"
                        placeholder="Enter medication schedule here"
                    />
                  </li>
                  <li>
                    <label htmlFor="pharmName">Pharmancy Name</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="pharmName"
                        id="pharmName"
                        placeholder="Enter pharmacy name here"
                    />
                  </li>
                  <li>
                    <label htmlFor="pharmAddr">Pharmacy Address</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="pharmAddr"
                        id="pharmAddr"
                        placeholder="Enter pharmacy address here"
                    />
                  </li>
                  <li>
                    <label htmlFor="pharmPhone">Pharmacy Phone Number</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="pharmPhone"
                        id="pharmPhone"
                        placeholder="Enter pharmacy phone number here"
                    />
                  </li>
                  <li>
                    <label htmlFor="physicianName">Physician Name</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="physicianName"
                        id="physicianName"
                        placeholder="Enter physician's name here"
                    />
                  </li>
                  <li>
                    <label htmlFor="physicianAddr">Physician Address</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="physicianAddr"
                        id="physicianAddr"
                        placeholder="Enter physician's address here"
                    />
                  </li>
                  <li>
                    <label htmlFor="physicianPhone">Physician Phone Number</label>
                    <Field
                        component={AddMedsInput}
                        type="text"
                        name="physicianPhone"
                        id="physicianPhone"
                        placeholder="Enter physician's phone number here"
                    />
                  </li>
                  <li>
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                  </li>
                </ul>                    
            </form>
          </div>
      );
  }
}

export default reduxForm({
  form: 'addMedsForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('medName', 'medDosage'))
})(AddMedsForm);
