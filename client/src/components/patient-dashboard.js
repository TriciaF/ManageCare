import React from 'react';


export class PatientDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPatientData());
  }

  render() {
    return (
        <div>Hello Patient Dashboard</div>
    );//end return
  }//end render
}//end PatientDashboard


const mapStateToProps = state => {
  return {
      patient: {
          firstname: state.patient.firstname,
          lastname: state.patient.lastname
      },
  }

  }
