import React from 'react';
import {DropdownList} from 'react-widgets';
import {connect} from 'react-redux';


export function PatientList(props) {
  const patients = props.patientList.map(patient => {
      return patient.name;
  });
  console.log('PatientList', patients);
 
    return (
        <div>
          <DropdownList
            data={patients}
          />
        </div>
    );//end return

}//end PatientDashboard


const mapStateToProps = state => ({
  patientList: state.PatientList
});

export default connect (mapStateToProps)(PatientList);
