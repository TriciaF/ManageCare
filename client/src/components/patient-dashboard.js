import React from 'react';
import {connect} from 'react-redux';
import {setPatientDashboard} from '../actions/patient';

export class PatientDashboard extends React.Component {
  // componentWillMount() {
  //   console.log('enter componetWillMount PatientDashboard', this.props.currentPatient);
  //   return this.props.dispatch(setPatientDashboard(this.props.currentPatient))
  // }

  render() {

    //map over state.patientList to obtain the patient name
    const patientDashboard = this.props.patientList.find(patient => {
      return patient.name === this.props.currentPatient
    });

    this.props.dispatch(setPatientDashboard(patientDashboard));

    return (
      <form className="patient-dashboard">
        <div className="dashboard-header">
            <h1 className="dashboard-name">
                {patientDashboard.name}
            </h1>
        </div>
        <div className="dashboard-content">
          <ul className="dashboard">
            <li>
              {patientDashboard.medication}
            </li>
          <li>
              {patientDashboard.pharmacy}
          </li>
          <li>
              {patientDashboard.physician}
          </li>
          </ul>
        </div>
        <div className="buttons">
            <div>
              <button className="dashboard-button">Add Medication</button>
            </div>
            <div>
              <button className="dashboard-button">Remove Medication</button>
            </div>
            <div>
              <button className="dashboard-button">Update Patient Information</button>
            </div>
        </div> 
      </form>  
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => ({
  patientList: state.patient.patientList,
  currentPatient: state.patient.currentPatient,
  patientDashboard: state.patient.patientDashboard
});

export default connect(mapStateToProps)(PatientDashboard);