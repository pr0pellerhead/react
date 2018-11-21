import React from "react";
import { connect } from "react-redux";

import { TodoList } from "./TodoList";
import { TodoField } from "./TodoField";
import { Welcome } from "./Welcome";

import { addTodo, removeTodo } from "../actions/TodoAction";
import { fetchUsers } from "../actions/UsersAction";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoValue: "",
        }

        this.handleTodoChange = this.handleTodoChange.bind(this);
    }

    componentDidMount() {
        this.props.zemiKorisnici();
    }

    handleTodoChange(e) {
        this.setState({
            todoValue: e.target.value
        })
    }

    dodadiTodo(todo, e) {
        e.preventDefault();
        if(this.state.todoValue !== "") {
            this.props.addTodo(todo);
            this.setState({
                todoValue: ""
            });
        }
    }

    render() {
        
        return (
            <div id="app">
                <div className="centered-content">
                    <Welcome 
                        name="Mario"
                        age={50}
                    />
                    <TodoField 
                        handleChange={this.handleTodoChange}
                        todoValue={this.state.todoValue}
                        addTodo={(event) => this.dodadiTodo(this.state.todoValue, event)}
                    />
                    <TodoList 
                        todos={this.props.todos}
                        removeTodo={(todo) => this.props.removeTodo(todo)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.TodoReducer.todos 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        },
        removeTodo: (todo) => {
            dispatch(removeTodo(todo));
        },
        zemiKorisnici: () => {
            dispatch(fetchUsers())
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);