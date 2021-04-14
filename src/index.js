import React from "react";
import ReactDOM from "react-dom";

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import "./main.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nextId: 0,
            items: []
        }

        this.toggleItem = this.toggleItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    toggleItem(itemId) {
        let items = this.state.items.slice();

        for (let item of items) {
            if (item.id === itemId) {
                item.done = !item.done;
            }
        }

        this.setState({items});
    }

    addItem(text) {
        let items = this.state.items.slice();

        items.push({
            text,
            done: false,
            id: this.state.nextId
        });

        this.setState({
            items,
            nextId: this.state.nextId + 1
        });
    }

    render() {
        return [
            <NewTodo addItem={this.addItem} key="0"/>,
            <TodoList list={this.state.items} toggleItem={this.toggleItem} key="1"/>
        ];
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));