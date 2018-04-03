import React from 'react';
import {connect} from 'react-redux';
import {removeFromDashboard,  
        showAddMedsForm, 
        showPatientList, getPatientList} from '../actions/patient';
import PatientForm from './patient-form';
import PatientList from './patient-list'

export class PatientDashboard extends React.Component {

  backToPatientList() {
    this.props.dispatch(showPatientList());
    return this.props.dispatch(getPatientList())
  }
  render() {
    console.log('Enter PatientDashboard Component');
    if(this.props.showAddPatientForm){
      return <PatientForm />
    }
    if(this.props.showPatientList){
      return <PatientList />
    }

    const medicationList = this.props.patientDashboard.medication.map((med, index) => {
      return (<tr key={index}>
              <td>
               {med.name}
             </td>
             <td>
               {med.dosage}
             </td>
             <td>
               {med.schedule}
             </td>
             <td>
               {med.pharmacy.name}
             </td>
             <td>
               {med.pharmacy.address}
             </td>
             <td>
               {med.pharmacy.phoneNumber}
             </td>
             <td>
               {med.physician.name}
             </td>
             <td>
               {med.physician.address}
             </td>
             <td>
               {med.physician.phoneNumber}
             </td>
             <td>
                 <button className="rem-med-button" onClick={()=>this.props.dispatch(removeFromDashboard(med, this.props.patientDashboard.name))}>X</button>
             </td>
          </tr>)
    })
    
    return (
      <div>
          <div className="dashboard-header">
            <h1 className="dashboard-name">
                {this.props.currentPatient}
            </h1>
        </div>
        <div className="medicine-list">
        <div className="dashboard-buttons">
                <button className="add-med-button" onClick={() =>this.props.dispatch(showAddMedsForm(true))}>Add Medication</button>
                <button className="back-to-patient-list-button" onClick={() =>this.backToPatientList()}>Back to Patient List</button>
        </div>
        <div className='medication-table'>
          <table>
              <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Dosage</th>
                    <th>Schedule</th>
                    <th>Pharmacy Name</th>
                    <th>Pharmacy Address</th>
                    <th>Pharmacy Phone Number</th>
                    <th>Physician Name</th>
                    <th>Physician Address</th>
                    <th>Physician Phone Number</th>
                    <th>Remove</th>
                  </tr>
                      {medicationList}
              </tbody>
          </table>
        </div>
         </div>
      </div>  
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => ({
  patientDashboard: state.patient.patientDashboard,
  currentPatient: state.patient.currentPatient,
  showAddPatientForm: state.patient.showAddPatientForm,
  showPatientList: state.patient.showPatientList
});

export default connect(mapStateToProps)(PatientDashboard);