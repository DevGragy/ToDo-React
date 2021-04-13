import React from "react";
import PropTypes from "prop-types";
import "../css/checkmark.css";

function Checkmark(props) {
    return (
        <input
            onClick={props.toggleCkd}
            type="checkbox"
            className="checkbox"
            checked={`${props.done ? "true" : ""}`}
        ></input>
    );
}

Checkmark.propTypes = {
    done: PropTypes.bool,
    toggleCkd: PropTypes.func.isRequired,
};

export default Checkmark;
