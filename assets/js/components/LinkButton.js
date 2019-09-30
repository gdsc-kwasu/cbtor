import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
    const { href, children, type, margin } = props;
    return (
        <a href={href}
           className={`btn btn-sm btn--small ${type} ${margin}`}>
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
