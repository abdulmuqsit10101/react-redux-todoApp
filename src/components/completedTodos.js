import React from "react";
import { connect } from "react-redux";
import { undoCompleted } from "../redux/actions";


const TodoList = ({
    todos,
    undoCompleted
    }) => {

    const UndoCompleted = (item) => {
        undoCompleted(item);
    }
    const { completed } = todos;

    return (
        <>
            {completed.length > 0 && 
            (<>
                <ul>
                    {
                        completed.map((item, index) => (
                            <div key={index} className="flex">
                                <li> {item.id} My value is {item.value} </li> &nbsp;
                                <button onClick={() => UndoCompleted(item)}>Undo Completed</button>
                            </div>
                            ))
                        }
                </ul>
                <button>Empty Completed</button>
            </>)}
            </>
        )
}

const mapStateToProps = states => {
    return { todos: states.todos };
}

const matchDispatchToProps = dispatch => {
    return {
        undoCompleted: (val) => dispatch(undoCompleted(val))
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);