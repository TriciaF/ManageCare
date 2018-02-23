import React from 'react';
import {connect} from 'react-redux';
import {removeFromDashboard,  
        showMedsAddForm, 
        addToDashboard,
        removeMedication} from '../actions/patient';
import AddMedsForm from './add-meds-form';

export class PatientDashboard extends React.Component {


  render() {
    console.log('Enter PatientDashboard Component');

    if(this.props.showMedsAddForm){
      return <AddMedsForm />
    }
    if(this.props.addMedication) {
      this.props.dispatch(addToDashboard(this.props.patientDashboard))
    }
    if(this.props.removeMedication) {
      this.props.dispatch(removeFromDashboard(this.props.patientDashboard))
    }

    const medsName = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
               {med.name}
             </td>
    })
    const medsDosage = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
              {med.dosage}
             </td>
    })
    const medsSchedule = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
              {med.schedule}
             </td>
    })
    const medsPharmacy = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
              {med.pharmacy.name}
              {med.pharmacy.address}
              {med.pharmacy.phoneNumber}
            </td>
    })
    const medsPhysician = this.props.patientDashboard.medication.map((med, index) => {
      return <td key={index}>
              {med.physician.name}
              {med.physician.address}
              {med.physician.phoneNumber}
            </td>
    })
    const removeButton = this.props.patientDashboard.medication.map((med, index) =>{
      return <td key={index}>
                <button className="rem-med-button" onClick={()=>this.props.dispatch(removeMedication(med))}>X</button>
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
        <div className="dashboard-button">
              <div>
                <button className="add-med-button" onClick={() =>this.props.dispatch(showMedsAddForm())}>Add Medication</button>
              </div>
        </div>
          <table className="patient-dashboard">
              <tbody>
              <tr>
                <th>Name</th>
                <th>Dosage</th>
                <th>Schedule</th>
                <th>Pharmacy</th>
                <th>Physician</th>
                <th>Remove</th>
              </tr>
                <tr>
                  {medsName}
                </tr>
                <tr>
                  {medsDosage}
                </tr>
                <tr>
                  {medsSchedule}
                </tr>
                <tr>
                  {medsPharmacy}
                </tr>
                <tr>
                  {medsPhysician}
                </tr>
                <tr>
                  {removeButton}
                </tr>
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
  showMedsAddForm: state.patient.showMedsAddForm,
  removeMedication: state.patient.removeMedication,
});

export default connect(mapStateToProps)(PatientDashboard);