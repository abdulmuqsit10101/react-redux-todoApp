import React, { Component } from "react";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

class TodoApp extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <AddTodo/>
                <TodoList/>
            </>
        )
    }

}

export default TodoApp;