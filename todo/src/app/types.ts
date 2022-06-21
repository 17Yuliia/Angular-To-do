export interface ISubtaskTask {
    description: string,
    done: boolean,
}

export interface ITask {
    done: boolean; 
    title: string;
    subtasks?: ISubtaskTask[];
    deadline?: Date;
    progress: number;
    estimated?: number;
    description?: string;
}

export const TASK_DEFAULT_VALUE: ITask = {
    done: false,
    title: '',
    progress: 0,
    deadline: new Date(),
}