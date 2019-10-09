import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ answers, active, offset }) => {
    return (
        <div className="py-2 px-2">
            {
                answers.map((_, index) => {
                    return (
                        <span className={
                            `q-section__offset 
                            ${answers[index] ? 'q-section__offset--done' : ''} 
                            ${active === index ? 'q-section__offset--active' : ''}`}
                              key={index}
                              onClick={() => offset(index)}>
                            { index + 1 }
                        </span>
                    )
                })
            }
        </div>
    )
};

Pagination.propTypes = {
    answers: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    offset: PropTypes.func.isRequired,
};

export default Pagination;
