import React from 'react';

const Feedback = (props) => {
    return (
        <div className="row px-md-3 py-md-3">
            <div className="col-12 col-md-12 box-shadow py-5 px-5">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-7">
                        <h5>Leave your feedback</h5>
                        <p>
                            Do you have a complaint, or something you will like us to improve, or you
                            see some part we could do better? Let us know.
                        </p>
                        <form action="/feedback" method="post">
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <textarea name="message" id="message" cols="30" rows="10" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12 text-right">
                                    <button className="btn btn-success px-4 py-2" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
