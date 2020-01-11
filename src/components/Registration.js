import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            password: ''
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

    submitForm = (e) => {
        e.preventDefault();

        /*const users = {
            lastInsertId: 1,
            totalRecords: 1,
            records: [
                {
                    id: 1,
                    name: 'Prsannjeet',
                    email: 'prasannjett@gmil.com',
                    password: '32432'
                },
                {
                    id: 2,
                    name: 'Prsannjeet',
                    email: 'prasannjett@gmil.com',
                    password: '32432'
                },
                {
                    id: 3,
                    name: 'Prsannjeet',
                    email: 'prasannjett@gmil.com',
                    password: '32432'
                }
            ]
        };*/

        let users = {
            lastInsertId: 1,
            totalRecords: 1,
            records: [
                {
                    id: 1,
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                }
            ]
        };

        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            users = JSON.parse(localStorage.getItem('users'));
            const id = users.lastInsertId + 1;
            users.records.push({
                id: id,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            users.lastInsertId = id;
            users.totalRecords = users.records.length;
            localStorage.setItem('users', JSON.stringify(users));
        }

        this.setState(
            {
                name: '',
                email: '',
                number: '',
                password: ''
            }
        );
    }

    render() {
        return (
            <div className="registercss">
                <h1>
                    Create a new account
                </h1>
                <h3>
                    It's quick and easy.
                </h3>
                <form onSubmit={this.submitForm}>

                    
                    <input type="text" value={this.state.name} name="name" onChange={this.onChange} placeholder="Name" required />
                    <br />
                   
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required />
                    <br />
                    
                    <input type="password" value={this.state.number} name="password" onChange={this.onChange} placeholder="Password" required />
                    <br />
                    <input type="submit" value="Sign Up"/>
                </form>
                Already registered? <Link to="/"> Login</Link>
            </div>
        );
    }
}
