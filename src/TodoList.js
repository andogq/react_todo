import React from "react";

import Todo from "./Todo"

class TodoList extends React.Component {
    render() {
        return (
            <div id="container_todo_list">
                <Todo item="yeet yeet"/>
            </div>
        )
    }
}

export default TodoList;