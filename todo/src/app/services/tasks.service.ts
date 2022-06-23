import { Injectable } from '@angular/core';
import { IFormData, ITask } from 'src/data/types';
import { FORM_ITEM_DEFAULT_VALUE } from '../../data/constants'


@Injectable({
    providedIn: 'root'
})

export class TasksService {

    constructor() {
    }

    private formIsOpen: boolean = false;

    private formItem: IFormData = FORM_ITEM_DEFAULT_VALUE;

    private data: ITask[] = [
        {
            id: 1,
            done: false,
            title: 'To do app',
            subtasks: [
                {
                description: 'create Angular project',
                done: true,
                },
                {
                description: 'create lyout',
                done: true,
                },
                {
                description: 'make functionality',
                done: true,
                },
                {
                description: 'cover with tests',
                done: true,
                },
            ],
            estimated: 2,
            deadline: new Date('June 25, 2022'),
            progress: 10,
            description: 'Create to do app using Angular',
        },
        {
            id: 2,
            done: false,
            title: 'Buy products',
            subtasks: [
                {
                description: 'Go to "Biedronka" and buy some meals',
                done: true,
                },
                {
                description: 'create lyout',
                done: true,
                },
                {
                description: 'make functionality',
                done: true,
                },
                {
                description: 'cover with tests',
                done: true,
                },
            ],
            estimated: 20,
            deadline: new Date('June 30, 2022'),
            progress: 70,
            description: 'Go to "Biedronka" and buy some meals',
        },
        {
            id: 3,
            done: false,
            title: 'Test',
            subtasks: [],
            estimated: 30,
            deadline: new Date('June 26, 2022'),
            progress: 45,
            description: 'create app',
        }
      ];
      
    getData(): ITask[] {
        return this.data;
    }

    addData(item: ITask) {
        this.data.push(item);
    }

    editData(item: ITask) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === item.id) {
                this.data[i] = item;
            }
        }
    }

    deleteData(item: ITask) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    setFormData(formItem: IFormData) {
        this.formItem = {
            item: {...formItem.item},
            mode: formItem.mode,
        };
    }

    getFormData() {
        return this.formItem;
    }

    getFormIsOpen() {
        return this.formIsOpen;
    }

    setFormIsOpen(value: boolean) {
        this.formIsOpen = value;
    }
}