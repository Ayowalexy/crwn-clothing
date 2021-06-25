import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: 'seinde4@yahoo.com',
            password: '1234567'
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name] : value
        })
    }
    render(){
        return (
            <div className="sign-in">
                <h1>I Already Have an Account</h1>
                <span>Sign in with email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        handleChange={this.handleSubmit}
                        value={this.state.email} 
                        required 
                        name="email"
                        label="email" 
                    />
                    
                    <FormInput
                      type="password"
                      name="password"
                      value={this.state.password}
                      handleChange = {this.handleChange}
                      label="password"
                      required
                    />
        
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn