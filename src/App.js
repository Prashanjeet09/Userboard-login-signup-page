import React, { Component } from 'react';
import Login from './components/Login.js';
import Admin from './components/Admin.js';
import Logout from './components/Logout.js';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Registration from './components/Registration';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>User Board </h1>
        </header>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
          <Registration />
        </Route>
        </Switch>

        <footer>
      
       <outer>
  <inner>&copy; Copyright 2020</inner>
</outer>
      </footer>
      </div>
      



    );
  }
}
