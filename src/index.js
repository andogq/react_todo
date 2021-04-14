import React from "react";
import ReactDOM from "react-dom";

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import "./main.css";

class App extends React.Component {
    render() {
        return [
            <NewTodo />,
            <TodoList />
        ];
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));