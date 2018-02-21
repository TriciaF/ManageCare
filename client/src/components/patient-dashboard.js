import React from 'react';
import {connect} from 'react-redux';
import {setPatientDashboard, addToDashboard, removeFromDashboard, updateDashboard} from '../actions/patient';

export class PatientDashboard extends React.Component {
  componentWillMount() {
    console.log('Enter ComponentWillMount PatientDashboard: ', this.props.patientDashboard);
    //map over state.patientList to obtain the patient name
    const patientDashboard = this.props.patientList.find(patient => {
      return patient.name === this.props.currentPatient
    });
    this.props.dispatch(setPatientDashboard(patientDashboard));
  }

  componentWillReceiveProps(nextProps) {
    console.log('Enter Component Will Receive Props - Patient Dashboard: ', this.props.patientDashboard);
    if(nextProps.patientDashboard && !this.props.patientDashboard) {
      const medication = this.props.patientDashboard.map( meds => {
        return Object.assign({}, meds, {
           name: meds.name,
           dosage: meds.dosage,
           schedule: meds.schedule,
           pharmacy: {
             name: meds.pharmacy.name,
             address: meds.pharmacy.address,
             phoneNumber: meds.pharmacy.phoneNumber
           },
           physician: {
             name: meds.physician.name,
             address: meds.physician.address,
             phoneNumber: meds.physician.phoneNumber
           },
         })
     });
    }
  }


  render() {
    
    console.log('Enter Render PatientDashboard: ', this.props.patientDashboard);
    return (
      <form className="patient-dashboard">
        <div className="dashboard-header">
            <h1 className="dashboard-name">
                {this.props.patientDashboard.name}
            </h1>
        </div>
        <div className="dashboard-content">
          <ul className="dashboard clearfix">
            <li>
              {this.props.patientDashboard.medication.name}
            </li>
            <li>
              {this.props.patientDashboard.medication.dosage}
            </li>
            <li>
              {this.props.patientDashboard.medication.schedule}
            </li>
            <li>
              {this.props.patientDashboard.medication[0].pharmacy.name}
              {this.props.patientDashboard.medication[0].pharmacy.address}
              {this.props.patientDashboard.medication[0].pharmacy.phoneNumber}
            </li>
            <li>
              {this.props.patientDashboard.medication[0].physician.name}
              {this.props.patientDashboard.medication[0].physician.address}
              {this.props.patientDashboard.medication[0].physician.phoneNumber}
            </li>
          </ul>
        </div>
        <div className="buttons">
            <div>
              <button className="dashboard-button" onClick={()=>this.props.dispatch(addToDashboard(this.props.patientList))}>Add Medication</button>
            </div>
            <div>
              <button className="dashboard-button" onClick={()=>this.props.dispatch(removeFromDashboard(this.props.patientList))}>Remove Medication</button>
            </div>
            <div>
              <button className="dashboard-button" onClick={()=>this.props.dispatch(updateDashboard(this.props.patientList))}>Update Patient Information</button>
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