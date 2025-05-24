import React from "react";
import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <p>good</p>
            <p>neutral</p>
            <p>bad</p>
            <p>total</p>
            <p>postive feedback percentage: {positivePercentage}%</p>
        </div>
    );

}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
};

export default Statistics;