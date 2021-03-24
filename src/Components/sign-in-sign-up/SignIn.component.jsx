import React from 'react';
import "./SignIn.styles.scss";

class SignIn extends React.Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password:""
        }
    }
    handleChange = (e)=> {
        const {name,value} = e.target;
        this.setState({[name]:value});
        e.preventDefault();
    }
    handleSubmit = (e) =>{
        this.setState({email:"",password:""});
        e.preventDefault();
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>Sign In</h2>
                <span>If you have already an account</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    <label>Email</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    <label>password</label>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        );
    }

}

export default SignIn;