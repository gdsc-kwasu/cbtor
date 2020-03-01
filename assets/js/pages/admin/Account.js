import React from 'react'

class Account extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange (event) {
        const word = event.target.value
        this.setState({ [event.target.name]: word })
    }

    handleSubmit () {
        console.log(this.state)
    }

    render () {
        return (
            <div className="container-fluid mt-5">
                <div className="row mt-5">
                    <div className="col-4 offset-2"></div>
                    <div className="col-4 px-3">
                        <form action='javascript:void(0)'>
                            <div className="row">
                                <div className="form-group col-6">
                                    <input 
                                        type="text"
                                        className="form-control" 
                                        placeholder='First Name'
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange= {this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder='Last Name'
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange= {this.handleChange}
                                    />
                                </div>
                            </div>
    
                            <div className="form-group my-2">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder='Email Address'
                                    name='email'
                                    value={this.state.email}
                                    onChange= {this.handleChange}
                                />
                            </div>
    
                            <div className="form-group my-4">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Password'
                                    name='password'
                                    value={this.state.password}
                                    onChange= {this.handleChange}
                                />
                            </div>
                            <div className="form-group my-4">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Confirm Password'
                                    name='confirmPassword'
                                    value={this.state.confirmPassword}
                                    onChange= {this.handleChange}
                                />
                            </div>
                            <button 
                                className="btn btn-outline-blue btn-block py-3 my-4 btn--create"
                                type='submit' onClick={this.handleSubmit}
                            >
                                Create Acount
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;