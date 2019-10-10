import React from 'react';
import PropTypes from 'prop-types';
import { InlineTex } from "react-tex";

const Option = ({ text, index, answer, onClick }) => {
    const label = ['A', 'B', 'C', 'D', 'E'][index];

    return (
        <div>
            <div className={`q-section__option ${answer === label ? 'active' : ''}`}
                 onClick={() => onClick(label)}>
                <span className={`q-section__option-indicator `}>
                    { label }
                </span>
                <InlineTex texContent={text}/>
            </div>
        </div>
    );
};

Option.propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Option;
