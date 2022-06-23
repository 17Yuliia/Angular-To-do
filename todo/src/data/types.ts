import { Mode } from "./enums";

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

export interface IFormData {
    item: ITask,
    mode: Mode,
}