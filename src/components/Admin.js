import React,{ Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import './Admin.css'

export default class Admin extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
       
      return (
          <div className="admincss">
        <h1>Hello from Admin page</h1>
      
       <Link to="/logout">Logout</Link>
       </div>
      );
    }
  }
  