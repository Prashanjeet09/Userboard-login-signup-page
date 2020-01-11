import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Logout.css';
export default class Logout extends Component {
    render() {
      return (
       <div className="logoutcss">
           <h1>From logout page</h1>
           <Link to="/">Login Again</Link>
       </div> 
      );
    }
  }
  