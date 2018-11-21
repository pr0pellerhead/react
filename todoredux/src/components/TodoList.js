import React from "react";

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <ol>
                   {
                       this.props.todos.length !== 0

                       ?

                       this.props.todos.map((todo, i) => {
                           return (
                               <li key={i}>
                                   <span>{todo}</span>
                                   <button onClick={() => this.props.removeTodo(todo)} type="button">X</button>
                               </li>
                           )
                       })

                       :

                       <span>Todo list is empty</span>
                   }
                </ol>
            </div>
        )
    }
}