import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

const TimerRenderer = ({hours, minutes, seconds, completed }) => {
    return (
        <span className={`timer ${ minutes < 5 ? 'timer--danger' : ''}`}>
            {String(hours).padStart(2, '0') }:
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
        </span>
    );
};

const Timer = ({ terminateExam, duration }) => {
    return (
        <div className="d-flex justify-content-between py-2 py-3 px-3 border border-light">
            <button className="btn btn-outline-danger btn-terminate" onClick={terminateExam}>
                Terminate Exam
            </button>
            <Countdown date={Date.now() + duration * 60 * 1000} renderer={TimerRenderer} onComplete={terminateExam} />
        </div>
    );
};

Timer.propTypes = {
    terminateExam: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired,
};

export default Timer;
