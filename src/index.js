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
                    item: "Blah blah blah yeah woo",
                    done: false,
                    id: 0
                },
                {
                    item: "Blah blah yeah woo",
                    done: false,
                    id: 1
                },
                {
                    item: "Blah yeah ahhh",
                    done: false,
                    id: 2
                },
                {
                    item: "Blah blah yeet woo",
                    done: false,
                    id: 3
                },
                {
                    item: "Yeeteth",
                    done: true,
                    id: 4
                }
            ]
        }
    }
    render() {
        return [
            <NewTodo key="0"/>,
            <TodoList list={this.state.items} key="1"/>
        ];
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));