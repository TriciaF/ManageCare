import React from 'react';
import {connect} from 'react-redux';
import {removeFromDashboard, updateDashboard, showMedsAddForm, addToDashboard} from '../actions/patient';
import AddMedsForm from './add-meds-form';

export class PatientDashboard extends React.Component {


  render() {
    console.log('Enter PatientDashboard Component');

    if(this.props.showMedsAddForm){
      return <AddMedsForm />
    }
    if(this.props.loading) {
      this.props.dispatch(addToDashboard(this.props.patientDashboard))
    }

    const medsName = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
               {med.name}
             </td>
    })
    const medsDosage = this.props.patientDashboard.medication.map(med => {
      return <td>
              {med.dosage}
             </td>
    })
    const medsSchedule = this.props.patientDashboard.medication.map(med => {
      return <td>
              {med.schedule}
             </td>
    })
    const medsPharmacy = this.props.patientDashboard.medication.map(med => {
      return <td>
              {med.pharmacy.name}
              {med.pharmacy.address}
              {med.pharmacy.phoneNumber}
            </td>
    })
    const medsPhysician = this.props.patientDashboard.medication.map(med => {
      return <td>
              {med.physician.name}
              {med.physician.address}
              {med.physician.phoneNumber}
            </td>
    })

    return (
      <form className="patient-dashboard">
        <div className="dashboard-header">
            <h1 className="dashboard-name">
                {this.props.patientDashboard.name}
            </h1>
        </div>
        <div className="dashboard-content">
          <table className="patient-dashboard">
            <thread>
              <tr>
                <th>Name</th>
                <th>Dosage</th>
                <th>Schedule</th>
                <th>Pharmacy</th>
                <th>Physician</th>
              </tr>
            </thread>
              <tbody>
                <tr>
                  {medsName}
                  {medsDosage}
                  {medsSchedule}
                  {medsPharmacy}
                  {medsPhysician}
                </tr>
              </tbody>
          </table>
        </div>
        <div className="buttons">
              <div>
                <button className="dashboard-button" onClick={() =>this.props.dispatch(showMedsAddForm())}>Add Medication</button>
              </div>
              <div>
                <button className="dashboard-button" onClick={()=>this.handleRemoveMedication()}>Remove Medication</button>
              </div>
              <div>
                <button className="dashboard-button" onClick={()=>this.handleUpdatePatient()}>Update Patient Information</button>
              </div>
        </div> 
      </form>
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => ({
  patientList: state.patient.patientList,
  patientDashboard: state.patient.patientDashboard,
  showMedsAddForm: state.patient.showMedsAddForm,
  loading: state.patient.loading
});

export default connect(mapStateToProps)(PatientDashboard);