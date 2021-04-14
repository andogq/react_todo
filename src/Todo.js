import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div class="container_todo">
                <input type="checkbox"/>
                <p>{this.props.item}</p>
            </div>
        );
    }
}

export default Todo;