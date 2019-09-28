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
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleClick(){
        var a = document.getElementById('password-field');
        if(a.type === 'password' ){
            a.type = 'text';
        }
        else{
            a.type = 'password';
        }
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
                        <span onClick={this.handleClick} className='fa field-icon fa-eye'></span>
                        <h6 className="text-success ml-5 mt-3">Enter your Coupon code</h6>
                        <input type="number" value={this.state.coupon} onChange={this.handleChange} name= 'coupon' className='form-effect pl-4' placeholder='Coupon code' required />
                        <button className="btn btn-success btn-block mt-3">Sign Up</button>
                        <p className='text-request mt-4'>Forgot Password? <a href="#">Click here</a></p>
                        <p className='text-request'>Have an account? <a href="#">Sign in</a></p>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Register;

ReactDOM.render(<Register />, document.getElementById('register'))