import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import {showLoginForm, logOut} from '../actions/auth';
import {addNewPatient} from '../actions/patient';


class NavBarTop extends React.Component {


render () {
  console.log('Enter NavBarTop')

if(this.props.loggedIn) {
    console.log('enter render logout button')
      return (<div className="navbar-top">
      <nav>
        <ul className="nav-components">
            <li className="sub-component">
              <div onClick={()=>this.props.dispatch(logOut())}>
                <a href="localhost:3000/" className="sub-header-link">
                  Logout
                </a>
              </div>
            </li>
            <li className="sub-component">
              <div onClick={()=> this.showAbout()}>
                <a href="localhost:3000/" className="sub-header-link">
                  About
                </a>
              </div>
            </li>
            <li className="sub-component">
              <div onClick={() =>this.props.dispatch(addNewPatient())}>
                <a href="localhost:3000/" className="sub-header-link">
                  Add Patient
                </a>
              </div>
            </li>
        </ul>
      </nav>
    </div>)
}
    
if(this.props.showLoginForm) 
    return <LoginForm />

if(this.props.loggedIn === false)

  return(
    <div className="navbar-top">
      <nav>
        <ul className="nav-components">
            <li className="sub-component">
              <div onClick={()=>this.props.dispatch(showLoginForm())}>
                <a href="localhost:3000/" className="sub-header-link">
                  Login
                </a>
              </div>
            </li>
            <li className="sub-component">
              <div onClick={()=> this.showAbout()}>
                <a href="localhost:3000/" className="sub-header-link">
                  About
                </a>
              </div>
            </li>
        </ul>
      </nav>
    </div>
  );//end return
  }//end render
}//end NavBarTop

const mapStateToProps = state => ({
  showLoginForm: state.auth.showLoginForm,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(NavBarTop);