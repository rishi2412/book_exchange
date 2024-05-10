import React, { Component } from 'react';
import '../../styles/authentication/Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to handle form submission, such as sending data to a server
        console.log('Submitted:', this.state);
        // Reset form fields after submission
        this.setState({
            username: '',
            password: ''
        });
        window.location.href = '/home';
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { username, password } = this.state;

        return (
            <div>
                <h2>User Login Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );

    }
}


export default Auth;