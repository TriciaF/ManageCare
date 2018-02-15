import React from 'react';
import {DropdownList} from 'react-widgets';
import {connect} from 'react-redux';
import {getPatientList} from '../actions/patient';


export class PatientList extends React.Component {
  componentWillMount() {
    console.log('Enter PatientList');
    this.props.dispatch(getPatientList());
  };

  componentWillReceiveProps(nextProps) {
    const patients = nextProps.patientList.map(patient => {
      console.log('PatientList', patient.name);
      return patient.name;
    });
  }

   render() {


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
