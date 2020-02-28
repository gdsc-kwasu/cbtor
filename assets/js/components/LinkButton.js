import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    const { href, children, type, margin } = props;
    return (
        <a href={href}
           className={`btn btn-sm btn--small px-1 px-sm-3 ${type} ${margin}`}>
            { children }
        </a>
    );
};

/*
* Default properties.
*
* */
LinkButton.defaultProps = {
    type: 'btn-success',
    margin: '',
};

/*
* Properties required, types
* */
LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any,
    type: PropTypes.string,
    margin: PropTypes.string,
};

export default LinkButton;
