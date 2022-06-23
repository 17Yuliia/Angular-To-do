import { Mode } from "./enums"
import { ITask } from "./types"

export const TASK_DEFAULT_VALUE: ITask = {
    id: 0,
    done: false,
    title: '',
    progress: 0,
    deadline: new Date(),
    description: '',
    estimated: 1,
}

export const FORM_ITEM_DEFAULT_VALUE = {
    item: {...TASK_DEFAULT_VALUE},
    mode: Mode.add,
}