import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
    <div className="Error-container">
        <p className="Error-title">Load error:</p>
        <p className="Error-description">{error}</p>
    </div>
);

Error.defaultProps = {
    error: 'Unknown error. Please, try later.',
};

Error.propTypes = {
    error: PropTypes.string,
};

export default Error;
