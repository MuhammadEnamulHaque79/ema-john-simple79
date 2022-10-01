import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');
    const[createUserWithEmailAndPassword]=useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    };
    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value);
        setPassword(event.target.value);
    };
    const handleConfirmPasswordBlur=(event)=>{
        // console.log(event.target.value);
        setConfirmPassword(event.target.value);
    };

    const handleCreateUser=(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your password doesn't match !!");
            return;
        }
        if(password.length >= 6){
            setError("Password must be 6 characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm Password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>Already have an Account? <Link className='form-link' to='/login'>Login</Link></p>
                <div className='line-divider'>
                    <div>______________</div>
                    <p className='divider'>or</p>
                    <div>_______________</div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;