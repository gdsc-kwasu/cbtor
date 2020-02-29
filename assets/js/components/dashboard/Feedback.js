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
                        <iframe
                            className="col-12 col-md-12 box-shadow"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc1jzsJ7KKVobAnuxNK1CUTaJgUvjU9QD4RS1BUYGO-juSDWg/viewform?embedded=true" 
                            width="640" 
                            height="728" 
                            frameborder="0" 
                            marginheight="0" 
                            marginwidth="0"
                            overflow-y= "hidden"
                            scrolling="no">    
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
