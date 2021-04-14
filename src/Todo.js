import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.toggleItem(this.props.itemId);
    }

    render() {
        return (
            <div className="container_todo">
                <input checked={this.props.done} type="checkbox" onChange={this.handleChange}/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Todo;