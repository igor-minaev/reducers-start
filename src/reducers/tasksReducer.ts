import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state: TaskType[], action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(el => el.id !== action.payload.id)
        }
        case 'ADD-TASK': {
            const newTask = {id: v1(), title:action.payload.title, isDone: false};
            return [newTask,...state]
        }
        default:
            return state
    }
}


type ActionsType = RemoveTaskACType | AddTaskACType

type RemoveTaskACType = ReturnType<typeof RemoveTaskAC>
type AddTaskACType = ReturnType<typeof AddTaskAC>


export const RemoveTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id}
    } as const
}

export const AddTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title}
    } as const
}