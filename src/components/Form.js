import React from "react";
import PropTypes from "prop-types";
import "../css/form.css";

class Form extends React.Component {
    state = {
        value: "",
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTask(this.state.value);

        this.setState({ value: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="Agrega una tarea"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button className="button">Agregar</button>
            </form>
        );
    }
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default Form;
