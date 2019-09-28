import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import examOption from '../components/examOption'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 bg-primary pt-5">
                                <h1 className='text-white text-center font-weight-bold'>CBTor</h1>
                                <hr className='horizontal-line' />
                                <div className='d-flex justify-content-end sidebar__btn pr-0 pt-5'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Take Exam</h6></button></div>
                                <div className='d-flex justify-content-end sidebar__btn pr-0'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Wallet</h6></button></div>
                                <div className='d-flex justify-content-end sidebar__btn pr-0'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Scores</h6></button></div>
                                <div className='d-flex justify-content-end sidebar__btn pr-0'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Feedback</h6></button></div>
                                <div className='d-flex justify-content-end sidebar__btn pr-0'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Change Password</h6></button></div>
                                <hr className='horizontal-line' />
                                <div className='d-flex justify-content-end sidebar__btn pr-0'><button className='sidebar__btn--btn text-white'><h6 className='pl-4 py-2 pr-5'>Logout</h6></button></div>
                            </div>
                            <div className="col-10 px-0">
                                <nav class="navbar navbar-expand-md navbar-light bg-whit px-md-5 py-4">
                                    <a class="navbar-brand d-flex align-items-center" href="#">
                                        <img src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1569269285/logo_zrn1mx.png" alt="app-logo" />
                                    </a>
                                    <div className='mt-2'>
                                        <h5 className='font-weight-bold'>Adio Olanrewaju Mojeed</h5>
                                        <p className='font-weight-bold'>adio.mojeed@gmail.com</p>
                                    </div>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                         <ul class="navbar-nav ml-auto mr-md-5">
                                            <li class="nav-item mx-md-3 bg-success mx-md-2 my-md-0 pt-1 px-2 text-center">
                                                <a class="nav-link text-white" href="#"><h6>EDIT PROFILE</h6></a>
                                            </li>
                                            <li class="nav-item mx-md-3 mx-md-2 pt-1 px-2 text-center my-md-0">
                                                <a class="nav-link text-success" href="#"><h6>CONTACT SUPPORT</h6></a>
                                            </li>
                                            <li class="nav-item mx-md-3 mx-md-2 pt-1 px-2 text-center">
                                                <a class="nav-link text-success" href="#"><h6>ABOUT</h6></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <hr/>
                                <div className="row p-4">
                                    <div className="col-md-8 col-11 px-3">
                                        <div className='shadow-sm p-3 pt-4'>
                                            {examOption.map(z => (
                                                <React.Fragment>
                                                    <div className="row">
                                                    <div className="col-3 d-flex align-items-center justify-content-center"><h6>{z.courseCode}</h6></div>
                                                    <div className="col-6 d-flex align-items-center"><h6>{z.courseTitle}</h6></div>
                                                    <div className="col-3 d-flex align-items-center"><button className='bg-success nav-item'><h6 className='px-3 text-white pt-1'>TAKE EXAM</h6></button></div>
                                                </div>
                                                <hr />
                                                </React.Fragment>
                                            ))}
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-3">
                                        <div className='shadow-sm p-3'>jkbeusfbufxv</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Dashboard;

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'))