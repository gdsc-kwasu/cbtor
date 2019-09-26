import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            coupon: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(){
        alert(this.state.firstName +'<br />'+ this.state.lastName +'<br />'+ this.state.email +'<br />'+ this.state.phone +'<br />'+ this.state.password)
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <h2 className="font-weight-bold">REGISTER FOR AN ACCOUNT</h2>
                    <form action="#" method="post" className='form'>
                        <input type="text" value={this.state.firstName} onChange={this.handleChange} name= 'firstName' className='form-effect pl-4 mt-3' placeholder='First name' required />
                        <input type="text" value={this.state.lastName} onChange={this.handleChange} name= 'lastName' className='form-effect pl-4 mt-3' placeholder='Last name' required />
                        <input type="email" value={this.state.email} onChange={this.handleChange} name= 'email' className='form-effect pl-4 mt-3' placeholder='Email' required />
                        <input type='tel' value={this.state.phone} onChange={this.handleChange} name= 'phone' className='form-effect pl-4 mt-3' placeholder='Phone' required />
                        <input id="password-field" value={this.state.password} onChange={this.handleChange} name= 'password' type="password" class="form-effect pl-4 mt-3 pr-5" placeholder="Password" required />
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                        <p className="text-success ml-5">Enter your Coupon code</p>
                        <input type="number" value={this.state.coupon} onChange={this.handleChange} name= 'coupon' className='form-effect pl-4' placeholder='Coupon code' required />
                        <button className="btn btn-success btn-block mt-3" onClick={this.handleSubmit}>Sign Up</button>
                        <h1>kjbfduihdsuh</h1>
                        <h1>kjbfduihdsuh</h1>
                        <h1>kjbfduihdsuh</h1>
                    <p className="register">REGISTER FOR AN ACCOUNT</p>
                    <form action="/register" method="post" className='form'>
                        <input type="text" value={this.state.firstName} onChange={this.handleChange} name= 'firstName' className='input-value py-2 pl-4' placeholder='First name' required />
                        <input type="text" value={this.state.lastName} onChange={this.handleChange} name= 'lastName' className='input-value py-2 pl-4 mt-3' placeholder='Last name' required />
                        <input type="email" value={this.state.email} onChange={this.handleChange} name= 'email' className='input-value py-2 pl-4 mt-3' placeholder='Email' required />
                        <input type='tel' value={this.state.phone} onChange={this.handleChange} name= 'phone' className='input-value py-2 pl-4 mt-3' placeholder='Phone' required />
                        <input id="password-field" value={this.state.password} onChange={this.handleChange} name= 'password' type="password" class="input-value py-2 pl-4 mt-3 pr-5" placeholder="Password" required />
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                        <p className="coupon ml-4 mt-2 mb-1">Enter your Coupon code</p>
                        <input type="number" value={this.state.coupon} onChange={this.handleChange} name= 'coupon' className='input-value py-2 pl-4' placeholder='Coupon code' required />
                        <button className="btn btn-block mt-3" type="submit">Sign Up</button>
                        <p className="forgot mt-5">Forgot Password? <a href="#" className='link'>Click here</a></p>
                        <p className="forgot have mt-0 ml-2 ml-md-0 mt-4">Have an account? <a href="#" className='link'>Sign in</a></p>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Register;

ReactDOM.render(<Register />, document.getElementById('register'))