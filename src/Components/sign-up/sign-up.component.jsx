import React from 'react';
import CustomButton from '../CustomButton/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss';
import {auth,userProfileDocument} from '../../firebase/firebase.utilites';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: "",
            email : "",
            password: "",
            confirmPassword : ""
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password doesn't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );
            await userProfileDocument(user,{ displayName });
            this.setState({
                displayName: "",
                email : "",
                password: "",
                confirmPassword : ""
                });
        }catch(error){
            console.error(error);
        }
       
    };
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name] : value
        });
    };

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className = 'SignUp'>
                <h2>I do not have account</h2>
                <span>Create your account with email and password</span>
                <form className='sign-up-form' onSubmit ={this.handleSubmit}>
                    <FormInput type='text' name="displayName" value={displayName} onChange={this.handleChange} label="Display Name"></FormInput>    
                    <FormInput type='email' name="email" value={email} onChange={this.handleChange} label="Email"></FormInput>    
                    <FormInput type='password' name="password" value={password} onChange={this.handleChange} label = "Password"></FormInput>    
                    <FormInput type='password' name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confrim Password" ></FormInput>    
                    <CustomButton type='submit'>Sign UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;