import React from 'react';

const Password = (props) => {
    return (
        <div className="row px-md-3 py-md-3">
            <div className="col-12 col-md-12 box-shadow py-5 px-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <h5>Change your password</h5>
                        <p>
                            Make changes to your password settings. Your current password is required, and
                            the new password you want to use.
                        </p>
                        <div className="row mt-5">
                            <div className="col-12">
                                <form action="/password" method="post">
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <input type="password"
                                                   className="form-control"
                                                   placeholder="Old password"
                                                   name="old_password"
                                                   required={true}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <input type="password"
                                                   className="form-control"
                                                   placeholder="New password"
                                                   name="password"
                                                   required={true}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <input type="password"
                                                   className="form-control"
                                                   placeholder="Confirm new password"
                                                   name="confirm_password"
                                                   required={true}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <button className="btn btn-block btn-success btn-custom">Change Password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;
