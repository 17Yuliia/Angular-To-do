import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { TasksService } from './data/tasks.service';
import { ITask } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TasksService],
})

export class AppComponent implements DoCheck{
    title = 'todo';

    constructor(private tasksService: TasksService) { 
        this.showForm = this.tasksService.getFormIsOpen();
    }

    ngDoCheck(): void {
        this.showForm = this.tasksService.getFormIsOpen();
    }

    showForm: boolean;
    orderProp: keyof ITask = 'deadline';

    closeForm() {
        this.tasksService.setFormIsOpen(false);
    }

    setOrderProp(value: keyof ITask) {
        this.orderProp = value;
    }
}
