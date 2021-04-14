import React from "react";

class NewTodo extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick() {
        let input = this.inputRef.current;
        let value = input.value.trim();

        if (value !== "") this.props.addItem(value);

        input.value = "";
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this.handleClick();
        }
    }

    render() {
        return (
            <div id="container_new_todo">
                <input type="text" id="input_new_todo" onKeyPress={this.handleKeyPress} ref={this.inputRef}/>
                <button type="button" id="button_new_todo" onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default NewTodo;