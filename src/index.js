import React from "react";
import ReactDOM from "react-dom";

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import "./main.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    text: "Blah blah blah yeah woo",
                    done: false,
                    id: 0
                },
                {
                    text: "Blah blah yeah woo",
                    done: false,
                    id: 1
                },
                {
                    text: "Blah yeah ahhh",
                    done: false,
                    id: 2
                },
                {
                    text: "Blah blah yeet woo",
                    done: false,
                    id: 3
                },
                {
                    text: "Yeeteth",
                    done: true,
                    id: 4
                }
            ]
        }

        this.toggleItem = this.toggleItem.bind(this);
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

    render() {
        return [
            <NewTodo key="0"/>,
            <TodoList list={this.state.items} toggleItem={this.toggleItem} key="1"/>
        ];
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));