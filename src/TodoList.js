import React from "react";

import Todo from "./Todo"

class TodoList extends React.Component {
    render() {
        return (
            <div id="container_todo_list">
                {
                    this.props.list.sort((a, b) => a.done > b.done).map(item => 
                        <Todo text={item.text} done={item.done} toggleItem={this.props.toggleItem} itemId={item.id} key={item.id}/>
                    )
                }
            </div>
        )
    }
}

export default TodoList;