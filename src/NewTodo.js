import React from "react";

class NewTodo extends React.Component {
    render() {
        return (
            <div id="container_new_todo">
                <input type="text" id="input_new_todo"/>
                <button type="button" id="button_new_todo">Add</button>
            </div>
        );
    }
}

export default NewTodo;