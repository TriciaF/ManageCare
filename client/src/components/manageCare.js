import React from 'react';
import './manageCare.css';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import PatientForm from './patient-form';
import {clearAuth} from '../actions/auth';

export class ManageCare extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
        // When we are logged in, start login timer
        this.startLogoutWithInactivity();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    };
};

  startLogoutWithInactivity(){
    console.log('startLogoutWithInactity');
    this.logoutTimer = setInterval( () => this.props.dispatch(clearAuth()), 6 * 60000);
  };

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  };

  stopPeriodicRefresh() {
    console.log('stopPeriodRefresh');
      if (!this.logoutTimer) {
          return;
      }
      clearInterval(this.logoutTimer);
  }


    render() {
      if( this.props.loggedIn) {
        console.log('render manageCare after login');
        return (
          <div><PatientForm /></div>
        )
        
      }
        return ( 
          <div className = "manageCare" >
            <header className = "manageCare-header" >
              <h1 className = "manageCare-title" >Manage Care</h1>
              <h2 className = "manageCare-intro" >Helping to track patient care</h2>  
            </header> 
            <Route exact path='/login' component= {LoginForm}/>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  logoutWarning: state.auth.logoutWarning !== null,
  loggedIn: state.auth.currentUser,
  hasAuthToken: state.auth.authToken
});


export default withRouter(connect(mapStateToProps)(ManageCare));