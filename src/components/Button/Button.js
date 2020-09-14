import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => (
    <div className="Button-container">
        <button type="button" className="Button" onClick={onLoadMore}>
            Load more
        </button>
    </div>
);

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};

export default Button;
