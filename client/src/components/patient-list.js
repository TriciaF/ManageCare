import React from 'react';
import {DropdownList} from 'react-widgets';
import {connect} from 'react-redux';
import {getPatientList, setPatientDashboard} from '../actions/patient';
import './patient-list.css';
import PatientDashboard from './patient-dashboard';
import 'react-widgets/dist/css/react-widgets.css';


export class PatientList extends React.Component {
  componentWillMount() {
    console.log('Enter PatientList');
    this.props.dispatch(getPatientList());
  };

  onChange(value) {;
    console.log('enter onChange setCurrentPatient', value)
    const patientDashboardInfo = this.props.patientList.find(patient => {
      return patient.name === value
    });
    this.props.dispatch(setPatientDashboard(value, patientDashboardInfo));
    
    
    
    // console.log('patientDashboardInfo: ', patientDashboardInfo);
    // this.props.dispatch(setPatientDashboard(patientDashboardInfo));
  };
 

   render() {
     if(this.props.patientDashboard) {
       return (
        <PatientDashboard />
       )
     }
     //map over state.patientList to obtain the patient name
     const patients = this.props.patientList.map(patient => {
       return patient.name;
     })

    return (
      <form className="patient-list">
        <DropdownList
          className="dropdown_customized"
          data={patients}
          value={this.props.currentPatient}
          onChange={value => this.onChange(value)}
        />
      </form>
    );//end return
  }//end render
}//end PatientDashboard

const mapStateToProps = state => ({
    patientList: state.patient.patientList,
    currentPatient: state.patient.currentPatient,
    patientDashboard: state.patient.patientDashboard
});

export default connect(mapStateToProps)(PatientList);
