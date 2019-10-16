import React from 'react';
import PropTypes from 'prop-types';
import { InlineTex } from "react-tex";

const LatexRenderer = ({ text }) => {
    return (
        <div className="text-primary">
            <InlineTex texContent={text} />
        </div>
    );
};

LatexRenderer.propTypes = {
    text: PropTypes.string,
};

export default LatexRenderer;
