import React from "react";
import PropTypes from "prop-types";

function Feedback({ options, onLeavefeedback }) {
    return (
        <div>
            {options.map((option) => (
                <button key={option} onClick={() => onLeavefeedback(option)}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
}
Feedback.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};

export default Feedback;