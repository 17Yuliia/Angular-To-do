export interface ISubtaskTask {
    description: string,
    done: boolean,
}

export interface ITask {
    id: number,
    done: boolean; 
    title: string;
    subtasks?: ISubtaskTask[];
    deadline?: Date;
    progress: number;
    estimated?: number;
    description?: string;
}

export const TASK_DEFAULT_VALUE: ITask = {
    id: 0,
    done: false,
    title: '',
    progress: 0,
    deadline: new Date(),
}

export const enum Mode {
    add,
    edit,
}

export interface IFormData {
    item: ITask,
    mode: Mode,
}

export const FORM_ITEM_DEFAULT_VALUE = {
    item: {...TASK_DEFAULT_VALUE},
    mode: Mode.add,
}

