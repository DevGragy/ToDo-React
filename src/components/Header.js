import React from "react";
import PropTypes from "prop-types";
import "../css/header.css";

function Header(props) {
    return (
        <div className="card-header">
            <h1 className="card-header-title header">
                Hay {props.totalTasks} Tareas
            </h1>
        </div>
    );
}

Header.propTypes = {
    totalTasks: PropTypes.number,
};

Header.defaultProps = {
    totalTasks: 0,
};

export default Header;
