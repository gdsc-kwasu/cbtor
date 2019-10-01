import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const LoaderSpinner = ({ size, color }) => {
    return (
        <div className="p-5 text-center">
            <ClipLoader color={color} size={size}/>
        </div>
    );
};

LoaderSpinner.defaultProps = {
    size: 25,
    color: '#3cb89c',
};

LoaderSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

export default LoaderSpinner;
