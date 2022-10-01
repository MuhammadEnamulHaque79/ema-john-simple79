import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
            </div>
        </div>
    );
};

export default Login;