import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // very important logic;
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    if (user) {
        navigate(from, { replace: true });
    };

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    };

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <h2 style={{color:'yellow'}}>Loading.........</h2>
                    }


                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link></p>
                <div className='line-divider'>
                    <div>______________</div>
                    <p className='divider'>or</p>
                    <div>_______________</div>
                </div>
            </div>
        </div>
    );
};

export default Login;