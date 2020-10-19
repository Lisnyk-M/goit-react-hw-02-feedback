import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <>
            <button id={options[0]} onClick={() => onLeaveFeedback(options[0])}>{options[0]}</button>
            <button id={options[1]} onClick={() => onLeaveFeedback(options[1])}>{options[1]}</button>
            <button id={options[2]} onClick={() => onLeaveFeedback(options[2])}>{options[2]}</button>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;