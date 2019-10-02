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
                <form action="#">
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" name="firstName" className="form-control" placeholder="First name"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" name="lastName" className="form-control" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="email" name="email" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" name="phone" className="form-control" placeholder="Phone"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="password" name="password" className="form-control" id='password-field' placeholder="Password"/>
                            <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" onClick={this.handleClick}></span>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="coupon" className="text-primary">Enter your Coupon</label>
                            <input type="text" name="coupon" className="form-control text-center" placeholder="---- ---- ----" id="coupon"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <button className="btn btn-primary btn-custom btn-block">Sign Up</button>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <span className="font-weight-bold">
                                Have an Account? <a href="/login">Sign in</a>.
                            </span>
                        </div>
                    </div>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Register;

ReactDOM.render(<Register />, document.getElementById('app'));