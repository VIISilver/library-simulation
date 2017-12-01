import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return (
            <div >
                <a href={process.env.REACT_APP_LOGIN}><button><span>Login</span></button></a>
                <a href={process.env.REACT_APP_LOGIN}><button><span>Register</span></button></a>
                <p>Just to show that I can use a paragrah element.</p>
            </div>
        );
    }
}

export default Auth;