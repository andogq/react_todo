import React from "react";

import Todo from "./Todo"

class TodoList extends React.Component {
    render() {
        return (
            <div id="container_todo_list">
                {
                    this.props.list.sort((a, b) => a.done > b.done).map(({item, done, id}) => 
                        <Todo item={item} done={done} key={id}/>
                    )
                }
            </div>
        )
    }
}

export default TodoList;