import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            college: '',
            department: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(value, key) {
        this.setState({
            [key]: value
        })
    }

    onSubmit() {
        console.log(this.state)
    }

    render() {
        const { onChange } = this
        const { firstName, lastName, phoneNumber, college, department } = this.state

        return (
            <div className="row px-md-3 py-md-3">
                <div className="col-12 col-md-12 box-shadow py-5 px-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <form action="#" method="#">
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <input type="text" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                            className="form-control"
                                            value={firstName}
                                            onChange={({ target }) => onChange(target.value, 'firstName')}/>
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" 
                                            name="lastName" 
                                            placeholder="Last Name" 
                                            className="form-control" 
                                            value={lastName}
                                            onChange={({ target }) => onChange(target.value, 'lastName')}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <input type="tel" 
                                            name="phoneNumber" 
                                            placeholder="Telephone Number" 
                                            className="form-control"
                                            value={phoneNumber}
                                            onChange={({ target }) => onChange(target.value, 'phoneNumber')}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <select name="college" 
                                            className="form-control"
                                            value={college}
                                            onChange={({ target }) => onChange(target.value, 'college')}>
                                                <option value="College Of Agriculture">College Of Agriculture</option>
                                                <option value="College Of Education">College Of Education</option>
                                                <option value="College Of Engineering and Technology">College Of Engineering and Technology</option>
                                                <option value="College Of  Humanities, Management and Social Sciences">College Of  Humanities, Management and Social Sciences</option>
                                                <option value="College Of Information and Communication Technology">College Of Information and Communication Technology</option>
                                                <option value="College Of Law">College Of Law</option>
                                                <option value="College Of Pure and Applied Science">College Of Pure and Applied Science</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <input type="text" 
                                            name="department" 
                                            placeholder="Department" 
                                            className="form-control" 
                                            value={department}
                                            onChange={({ target }) => onChange(target.value, 'department')}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <button 
                                            onClick={ (e) => {e.preventDefault(); this.onSubmit()}} 
                                            className="btn btn-custom btn-block btn-success">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
