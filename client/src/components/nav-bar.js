import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import {showLoginForm} from '../actions/auth';


export class NavBar extends React.Component {


  componentDidMount() {
    this.showHeading();
  }

  showHeading() {
    const subHeading = document.getElementById("sub-heading");
    subHeading.classList.toggle("hidden");
};

  showAbout() {
    // const about = document.getElementById("about");
    // const login = document.getElementById("login");
    // login.classList.add("hidden");
    // about.classList.toggle("hidden");
};


  render () {

  if(this.props.showLoginForm) 
    return <LoginForm />

  console.log('Enter NavBar')

  return(
    <div className="container">
      <nav>
        <ul id="sub-heading" className="hidden">
            <li className="sub-header">
              <div onClick={()=>this.props.dispatch(showLoginForm())}>
                <a href="#" className="sub-header-link">
                  Login
                </a>
              </div>
                    <nav>
                        <ul id="login" className="hidden">
                            <li className="link-item">
                                <a href="#" className="sub-link">
                                    <div className="content-desktop">
                                    Show login Screen
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </li>
                <li className="sub-header">
                    <div onClick={()=> this.showAbout()}>
                        <a href="#" className="sub-header-link">
                          About
                        </a>
                    </div>
                      
                      <nav>
                        <ul id="about" className="hidden">
                            <li className="link-item">
                                <a href="#" className="sub-link">
                                    <div className="content-desktop">
                                    description
                                    </div>
                                    
                                </a>
                            </li>
                            <li className="link-item">
                                <a href="#" className="sub-link">
                                    <div className="content-desktop">
                                    description
                                    </div>
                                    
                                </a>
                            </li>
                            <li className="link-item">
                                <a href="#" className="sub-link">
                                    <div className="content-desktop">
                                    description
                                    </div>
                                    
                                </a>
                            </li>
                            <li className="link-item">
                                <a href="#" className="sub-link">
                                    <div className="content-desktop">
                                    descriptions
                                    </div>
                                    
                                </a>
                            </li>
                          </ul>
                        </nav>
                  </li>
                  <li className="sub-header">
                    <a href="#" className="sub-header-link">
                      Research Medications
                    </a>
                  </li>
                  <li className="sub-header">
                      <a href="#" className="sub-header-link">
                    Appointments
                      </a>
                  </li>
                  <li className="sub-header">
                    <a href="#" className="sub-header-link">
                    Patient List
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );//end return
  }//end render
}//end NavBar

const mapStateToProps = state => ({
  showLoginForm: state.auth.showLoginForm,
});

export default connect(mapStateToProps)(NavBar);