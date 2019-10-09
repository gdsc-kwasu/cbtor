import React from 'react';
import PropTypes from 'prop-types';

const PrevNext = ({ active, length, offset }) => {
    return (
        <div className="text-center py-2">
            {
                (active > 0) &&
                <i className="fas fa-backward q-section__prevNext"
                   onClick={() => offset(active - 1)}
                />
            }
            {
                (active < length - 1) &&
                <i className="fas fa-forward q-section__prevNext"
                   onClick={() => offset(active + 1)}
                />
            }
        </div>
    );
};

PrevNext.propTypes = {
    active: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    offset: PropTypes.func.isRequired,
};

export default PrevNext;
