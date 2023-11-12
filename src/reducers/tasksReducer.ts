import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state: TaskType[], action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(el => el.id !== action.payload.id)
        }
        case 'ADD-TASK': {
            const newTask = {id: v1(), title: action.payload.title, isDone: false};
            return [newTask, ...state]
        }
        default:
            return state
    }
}


type ActionsType = RemoveTaskACType | AddTaskACType

type RemoveTaskACType = ReturnType<typeof removeTaskAC>
type AddTaskACType = ReturnType<typeof addTaskAC>


export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id}
    } as const
}

export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title}
    } as const
}