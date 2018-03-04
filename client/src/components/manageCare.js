import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


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
      </div>
      <header className="manage-care-header">
        <div id="circle">Manage Care</div>
      </header> 
      </div> 
    );
  }
}



               
const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(ManageCare);