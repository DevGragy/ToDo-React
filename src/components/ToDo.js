import React from "react";
import PropTypes from "prop-types";
import Checkmark from "./Checkmark";
import "../css/todo.css";

class ToDo extends React.Component {
    render() {
        return (
            <div className={`list-item ${this.props.done ? "done" : ""}`}>
                {this.props.name}
                <div className="is-pulled-right">
                    <Checkmark
                        toggleCkd={this.props.toggleCkd}
                        done={this.props.done}
                    />
                    <button
                        className="delete is-pulled-right"
                        onClick={(e) => this.props.toggleDlt(e)}
                    />
                </div>
            </div>
        );
    }
}

ToDo.propTypes = {
    done: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    toggleCkd: PropTypes.func.isRequired,
    toggleDlt: PropTypes.func.isRequired,
};

export default ToDo;
