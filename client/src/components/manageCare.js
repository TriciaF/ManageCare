import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import NavBar from './nav-bar';

export class ManageCare extends React.Component {
  
    render() {
      console.log('Enter ManageCare component');
      // If we are logged in redirect straight to the user's dashboard
      if (this.props.loggedIn) {
        console.log('enter ManageCare Redirect to /patient');
          return (<Redirect to="/patient" />);
      }

    return (
      <div>
      <div className="manage-care">
         <NavBar />
      </div>
      <header className="manageCare-header">
        <div id="circle">
          <h1 className="manageCare-title">Manage Care</h1>
          <h2 className="manageCare-intro">Helping to manage patient care</h2>
        </div>
      </header> 
      </div> 
    );
  }
}



               
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
});

export default connect(mapStateToProps)(ManageCare);