import React from "react";
import PropTypes from "prop-types";
import ToDo from "./ToDo";
import "../css/todolist.css";

function ToDoList(props) {
    return (
        <div className="list-wrapper">
            {props.tasks.map((task, i) => (
                <ToDo
                    key={i}
                    name={task.name}
                    done={task.done}
                    toggleCkd={(e) => props.toggleCkd(e, i)}
                    toggleDlt={(e) => props.toggleDlt(e, i)}
                />
            ))}
        </div>
    );
}

ToDoList.propTypes = {
    tasks: PropTypes.array,
    toggleDlt: PropTypes.func.isRequired,
    toggleCkd: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
    tasks: [],
};

export default ToDoList;
