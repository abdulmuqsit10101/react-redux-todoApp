import {
    TODO_ADDITION,
    TODO_COMPLETED,
    UNDO_COMPLETED,
    REMOVE_ALL_TASKS
} from "../actionTypes"

const initialState = {
    data: [],
    completed: []
};

export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TODO_ADDITION:
            const {
                id,
                inputValue
            } = action.payload;
            return {
                ...state,
                data: [...state.data, {
                    'id': id,
                    'value': inputValue
                }]
            }
        case TODO_COMPLETED:
            const { itemId } = action.payload;
            return {
                ...state,
                completed: [...state.completed, ...state.data.filter((item) => item.id === (itemId))],
                data: [...state.data.filter((item) => item.id !== (itemId))]
            }
        case UNDO_COMPLETED:
            const { undoItem } = action.payload;
            return {
                ...state,
                completed: [...state.completed.filter((item) => item.id !== (undoItem.id))],
                data: [...state.data, {
                    'id': undoItem.id,
                    'value': undoItem.value
                }],
            }
        case REMOVE_ALL_TASKS:
            return {
                ...state,
                data: [],
            }
        default:
            return {...state}
    }
}