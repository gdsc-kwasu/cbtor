import React from 'react'
import notify from './notify'
import { adminCreateAccount, adminGetAccounts, adminDeleteAccount } from '../../util/requests'


const DisplayUsers = ({ users, onRemove }) => {
    return (
        <React.Fragment>
            {
                users.map(({ _id, firstName, email }) => {
                    return (
                        <div className="d-flex justify-content-between my-1 px-3 py-2 bg-light small" key={_id}>
                            <span><strong>{firstName} </strong>{email}</span>
                            <span className="link" onClick={() => onRemove(_id)}>
                                remove
                            </span>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
class Account extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            users: [],
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    
    handleChange (event) {
        const word = event.target.value
        this.setState({ [event.target.name]: word })
    }

    resetState() {
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    componentDidMount() {
        adminGetAccounts()
            .then(users => {
                if (Array.isArray(users)) {
                    this.setState({
                        users
                    })
                }
            })
    }

    handleSubmit (e) {
        e.preventDefault()
        const {firstName, lastName, email, phone, password, confirmPassword } = this.state

        adminCreateAccount({ firstName, lastName, email, phone, password, confirmPassword })
            .then(account => {
                if (account.firstName) {
                    this.setState(({users}) => ({
                        users: [...users, account]
                    }))
                    notify('Success', 'Admin account successfully created.')
                    this.resetState()
                }
            })
    }

    handleRemove(id) {
        adminDeleteAccount(id)
            .then(user => {
                if (user.firstName) {
                    this.setState((state) => ({ 
                        users: state.users.filter(({ _id }) => _id != user._id)
                    }))
                }
            })
    }

    render () {
        const { users } = this.state

        return (
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6">
                        { users.length && <DisplayUsers users={users} onRemove={this.handleRemove} />}
                    </div>
                    <div className="col-6 px-3">
                        <form action='#' onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <input 
                                        type="text"
                                        className="form-control input--control" 
                                        placeholder='First Name'
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange= {this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <input 
                                        type="text" 
                                        className="form-control input--control" 
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
                                    className="form-control input--control" 
                                    placeholder='Email Address'
                                    name='email'
                                    value={this.state.email}
                                    onChange= {this.handleChange}
                                />
                            </div>

                            <div className="form-group my-2">
                                <input 
                                    type="tel" 
                                    className="form-control input--control" 
                                    placeholder='Phone Number'
                                    name='phone'
                                    value={this.state.phone}
                                    onChange= {this.handleChange}
                                />
                            </div>
    
                            <div className="form-group my-4">
                                <input 
                                    type="password" 
                                    className="form-control input--control" 
                                    placeholder='Password'
                                    name='password'
                                    value={this.state.password}
                                    onChange= {this.handleChange}
                                />
                            </div>
                            <div className="form-group my-4">
                                <input 
                                    type="password" 
                                    className="form-control input--control" 
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