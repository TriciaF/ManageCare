import React from 'react';
import {connect} from 'react-redux';

export class PatientDashboard extends React.Component {

  render() {
    console.log(this.props.patientList);
    //map over state.patientList to obtain the patient name

    const patientDashboard = this.props.patientList.find(patient => {
      return patient.name === this.props.currentPatient
    });

    return (
        <form className="patient-dashboard">
          <div>
            {patientDashboard.name}
          </div>
          <div>
            {patientDashboard.medication}
          </div>
          <div>
            {patientDashboard.pharmacy}
          </div>
          <div>
            {patientDashboard.physician}
          </div>
          <div>
            <button className="dashboard-button">Add Medication</button>
          </div>
          <div>
            <button className="dashboard-button">Remove Medication</button>
          </div>
          <div>
            <button className="dashboard-button">Update Patient Information</button>
          </div>
        </form>
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => ({
  patientList: state.patient.patientList,
  currentPatient: state.patient.currentPatient
});

export default connect(mapStateToProps)(PatientDashboard);