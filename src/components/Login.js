import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn: ''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    submitForm(e) {
        e.preventDefault();

        const { username, password } = this.state;

        

        const users = JSON.parse(localStorage.getItem('users'));

        const flag = users.records.findIndex(function(el){
            return el.email === username && el.password === password;
        })

        if (flag !== -1) {

            this.setState({
                loggedIn: true
            })
        } else {
            console.log('Invalid email or password');
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div className="logincss">
                <h1>Login to Userboard</h1>
                <form onSubmit={this.submitForm}>
                    
                    <input className="input1" type="text" value={this.state.username} name="username" onChange={this.onChange}  placeholder="Email ddress or Phone number" required/>
                    <br />
                    
                    <input className="input2" type="password" value={this.state.password} name="password" onChange={this.onChange} placeholder="Password" required/>
                    <br />
                    <input className="sub1" type="submit" value="Submit"/>
                </form>

                    Are you a new user? <Link to="/register">Signup</Link>
            </div>
        );
    }
}

