import React from 'react';
import logo from '../logo.svg';
import './manageCare.css';

export class ManageCare extends React.Component {
    render() {
        return ( 
          <div className = "manageCare" >
            <header className = "manageCare-header" >
              <img src = { logo } className = "react-logo" alt = "logo" />
              <h1 className = "manageCare-title" > Welcome to React </h1> 
            </header> 
            <p className = "manageCare-intro" >Welcome to the Manage Care Application</p> 
          </div>
        );
    }
}

export default ManageCare;