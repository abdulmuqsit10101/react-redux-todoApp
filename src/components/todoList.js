import React from "react";
import { connect } from "react-redux";
import {
    moveToCompleted,
    clearAllTasks
} from "../redux/actions";
import CompletedTasks from './completedTodos';


const TodoList = ({
    todos,
    moveToCompleted,
    clearAllTasks
    }) => {
    console.log('Data : ', todos);

    const MovedToCompleted = (id) => {
        moveToCompleted(id);
    }
    
    const { data } = todos;

        return (
            <>
                <h1>Total Tasks</h1>
                {
                    data.length > 0 && data.sort(function (a, b) {
                            return a.id - b.id
                        }) && (
                        <>
                            <ul>
                                {
                                    data.map((item, index) => (
                                        <div key={index}>
                                            <li>{item.id}'s Value is {item.value} <button onClick={() => MovedToCompleted(item.id)}>Move to Completed</button></li>
                                        </div>
                                        ))
                                    }
                            </ul>
                            <button onClick={() => clearAllTasks()}>Clear All Task</button>
                        </>
                    )
                }
                <h1>Completed Tasks</h1>
                <CompletedTasks/>
            </>
        )
}

const mapStateToProps = states => {
    return { todos: states.todos };
}

const mapDispatchToProps = dispatch => {
    return {
        moveToCompleted: (val) => dispatch(moveToCompleted(val)),
        clearAllTasks: () => dispatch(clearAllTasks()), // TODO: check this out by removing the parantheses !important
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);