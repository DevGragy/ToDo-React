import React from "react";
import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";

class App extends React.Component {
    state = { tasks: [] };

    componentDidMount() {
        this.setState({
            tasks: [
                { name: "Sesión 1 (JSX)", done: true },
                { name: "Sesión 2 (Estado y propiedades)", done: true },
                { name: "Sesión 3 (Ciclo de vida)", done: true },
                { name: "Sesión 4 (Hooks)", done: false },
                { name: "Sesión 5 (Hooks)", done: false },
                { name: "Sesión 6 (Rutas)", done: false },
                { name: "Sesión 7 (PWA)", done: false },
                { name: "Sesión 8 (Material UI)", done: false },
            ],
        });
    }

    toggleCkd = (e, i) => {
        const newTasks = [...this.state.tasks];
        newTasks[i].done = !newTasks[i].done;

        this.setState({ newTasks });
    };

    toggleDlt = (e, i) => {
        const newTasks = [...this.state.tasks];
        newTasks.splice(i, 1);

        this.setState({ tasks: newTasks });
    };

    addTask = (name) => {
        const ifExist = this.state.tasks.find((e) => name === e.name);

        if (ifExist) {
            alert(`La tarea ${name} ya existe... Intente otro nombre! :)`);
            return;
        }

        this.setState({
            tasks: this.state.tasks.concat([{ name, done: false }]),
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div className="card-frame">
                    <Header totalTasks={this.state.tasks.length} />
                    <Form addTask={this.addTask} />
                    <ToDoList
                        tasks={this.state.tasks}
                        toggleCkd={this.toggleCkd}
                        toggleDlt={this.toggleDlt}
                    />
                </div>
            </div>
        );
    }
}

export default App;
