import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div className="container_todo">
                <input checked={this.props.done} type="checkbox" onChange={() => console.log("change")}/>
                <p>{this.props.item}</p>
            </div>
        );
    }
}

export default Todo;