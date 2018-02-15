import React from 'react';
import {DropdownList} from 'react-widgets';
import {connect} from 'react-redux';
import {getPatientList} from '../actions/patient';


export class PatientList extends React.Component {
  componentWillMount() {
    console.log('Enter PatientList');
    this.props.dispatch(getPatientList());
  };

  //not sure this is needed?
  componentWillReceiveProps(nextProps) {
    console.log('Reenter PatientList', this.props.patientList);
  }

   render() {
    //  //map over state.patientList to obtain the patient name
    //  const patients = this.props.patientList.map(patient => {
    //    console.log('This is the patient name', patient.name)
    //    return patient.name;
    //  })
    return (
        <div>
          <DropdownList
            data={this.props.patientList}
          />
        </div>
    );//end return

}//end PatientDashboard
}

const mapStateToProps = state => ({
    patientList: state.patientList
});

export default connect(mapStateToProps)(PatientList);
