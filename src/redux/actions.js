import {
    TODO_ADDITION,
    TODO_COMPLETED,
    UNDO_COMPLETED,
    REMOVE_ALL_TASKS
} from "./actionTypes";

var nextId = 0;

export const addtodo = value => ({
    type: TODO_ADDITION,
    payload: {
        id: ++nextId,
        inputValue : value
    }
})

export const moveToCompleted = val => ({
    type: TODO_COMPLETED,
    payload: {
        itemId: val
    }
})

export const undoCompleted = itemData => ({
    type: UNDO_COMPLETED,
    payload: {
            newId: nextId++,
            undoItem: itemData
    }
})


// TODO: Important to ask about this

export const clearAllTasks = () => ({
    type: REMOVE_ALL_TASKS,
    payload: null,
})