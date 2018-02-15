import React from 'react';
import './manageCare.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function ManageCare(props) {
  console.log('Enter ManageCare component');
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
      console.log('enter ManageCare Redirect to /patient');
        return (<Redirect to="/patient" />);
    }

    return (
        <div className="manage-care">
          <header className = "manageCare-header" >
            <h1 className = "manageCare-title" >Manage Care</h1>
            <h2 className = "manageCare-intro" >Helping to manage patient care</h2>  
          </header>
            <LoginForm />
        </div>
    );
}



               
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
});

export default connect(mapStateToProps)(ManageCare);