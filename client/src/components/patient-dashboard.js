import React from 'react';
import {connect} from 'react-redux';
import {removeFromDashboard,  
        showMedsAddForm, 
        addToDashboard,
        getPatientList} from '../actions/patient';
import AddMedsForm from './add-meds-form';
import PatientForm from './patient-form';

export class PatientDashboard extends React.Component {


  render() {
    console.log('Enter PatientDashboard Component');

    if(this.props.showMedsAddForm){
      return <AddMedsForm />
    }
    if(this.props.addMedication) {
      this.props.dispatch(addToDashboard(this.props.patientDashboard))
    }
    if(this.props.showAddPatientForm){
      return <PatientForm />
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
      <form className="patient-dashboard">
        <div className="dashboard-header">
            <h1 className="dashboard-name">
                {this.props.currentPatient}
            </h1>
        </div>
        <div className="dashboard-button">
              <div>
                <button className="add-med-button" onClick={() =>this.props.dispatch(showMedsAddForm())}>Add Medication</button>
                <button className="back-to-patient-list-button" onClick={() =>this.props.dispatch(getPatientList())}>Back to Patient List</button>
              </div>
        </div>
        <div className="dashboard-content">
          <table className="medication-table">
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
    </form>
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => ({
  patientList: state.patient.patientList,
  patientDashboard: state.patient.patientDashboard,
  addMedication: state.patient.addMedication,
  removeMedication: state.patient.removeMedication,
  currentPatient: state.patient.currentPatient,
  showMedsAddForm: state.patient.showMedsAddForm,
  showAddPatientForm: state.patient.showAddPatientForm
});

export default connect(mapStateToProps)(PatientDashboard);