import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from "../CustomButton/custom-button.component";
import {auth,SignInWithGoogle} from '../../firebase/firebase.utilites';
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password:""
        }
    }
    handleSubmit = async event =>{
     event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: "",
                password:""
            });
            }catch(err){
                console.log(err);
            }
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    //render
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='email' value={this.state.email} label="email" handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' value={this.state.password} label="password" handleChange={this.handleChange} required/>
                <div className='button'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='submit' onClick={SignInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
                </form>
            </div>
        );
    }

}

export default SignIn;