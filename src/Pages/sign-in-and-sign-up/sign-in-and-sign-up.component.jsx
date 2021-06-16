import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../Components/sign-in-sign-up/SignIn.component';
import SignUp from '../../Components/sign-up/sign-up.component';

const SigninSignup = () => (
    <div className = "sign-in-and-sign-up">
        <SignIn/>  
        <SignUp/>
    </div>
);

export default SigninSignup;