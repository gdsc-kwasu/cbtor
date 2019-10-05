import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader as Loader } from 'react-spinners';

const PulseLoader = ({size, color}) => {
    return (
        <div className="text-center">
            <Loader size={size} color={color} />
        </div>
    );
};

PulseLoader.defaultProps = {
    color: '#3cb89c',
    size: 9
};

PulseLoader.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};

export default PulseLoader;