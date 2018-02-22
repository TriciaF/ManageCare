import React from 'react';
import {connect} from 'react-redux';
import {setPatientDashboard, addToDashboard, removeFromDashboard, updateDashboard} from '../actions/patient';

export class PatientDashboard extends React.Component {
  componentWillMount() {
    
  }

  render() {

    
    // if(!this.props.patientDashboard){
    //   console.log('After setPatientDashboard props.patientDashboard =  ', this.props.patientDashboard);
    //   return <div>Hello</div>
    // }

    

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
              {this.props.patientDashboard.medication[0].name}
            </li>
            <li>
              {this.props.patientDashboard.medication[0].dosage}
            </li>
            <li>
              {this.props.patientDashboard.medication[0].schedule}
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