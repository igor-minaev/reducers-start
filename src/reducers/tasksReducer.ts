import {TaskType} from "../Todolist";

export const tasksReducer = (state: TaskType[], action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(el => el.id !==action.payload.id)
        }
        default:
            return state
    }
}


type ActionsType = RemoveTaskACType

type RemoveTaskACType = ReturnType<typeof RemoveTaskAC>


export const RemoveTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id}
    } as const
}