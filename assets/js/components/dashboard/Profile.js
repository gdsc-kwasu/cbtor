import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
            <form action="#" method="#">
                <div className="form-row">
                    <div className="form-group col-6">
                        <input type="text" name="firstName" placeholder="First Name" className="form-control right"/>
                    </div>
                    <div className="form-group col-6">
                        <input type="text" name="lastName" placeholder="Last Name" className="form-control ml left"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <input type="number" name="phoneNumber" placeholder="Telephone Number" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <select name="College" className="form-control" placeholder="College">
                            <option value="" selected>Select your College</option>
                            <option value="Agric">College Of Agriculture</option>
                            <option value="EDU">College Of Education</option>
                            <option value="CET">College Of Engineering and Technology</option>
                            <option value="HMSS">College Of  Humanities, Management and Social Sciences</option>
                            <option value="ICT">College Of Information and Communication Technology</option>
                            <option value="Law">College Of Law</option>
                            <option value="PAS">College Of Pure and Applied Science</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <input type="text" name="department" placeholder="Department" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <button className="btn btn-custom btn-block btn-success">Save</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Profile />,
    document.getElementById('app')
)