import React from 'react';
import {connect} from 'react-redux';
import {DropdownList} from 'react-widgets';
import {getPatientList, setPatientDashboard} from '../actions/patient';
import 'react-widgets/dist/css/react-widgets.css';


export class PatientList extends React.Component {
  componentWillMount() {
    this.props.dispatch(getPatientList());
  }
  onChange(value) {
    console.log('enter onChange setCurrentPatient', value)
    const patientDashboardInfo = this.props.patientList.find(patient => {
      return patient.name === value
    });
    this.props.dispatch(setPatientDashboard(value, patientDashboardInfo));
  };

   render() {

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
  loggedIn: state.auth.loggedIn,
  patientList: state.patient.patientList
});

export default connect(mapStateToProps)(PatientList);


