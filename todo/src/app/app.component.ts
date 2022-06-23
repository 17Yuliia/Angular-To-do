import { ChangeDetectorRef, Component, DoCheck, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { TasksService } from '../services/tasks.service';
import { ITask } from 'src/data/types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TasksService],
})

export class AppComponent implements DoCheck{
    title = 'todo';
    showForm: boolean;
    orderProp: keyof ITask = 'deadline';

    constructor(private tasksService: TasksService, private ref: ChangeDetectorRef) { 
        this.showForm = this.tasksService.getFormIsOpen();
    }

    @ViewChild(BodyComponent, {static : true}) child : BodyComponent;

    ngDoCheck(): void {
        this.showForm = this.tasksService.getFormIsOpen();
    }

    closeForm() {
        this.tasksService.setFormIsOpen(false);
        this.child.updateTasks();
    }

    setOrderProp(value: keyof ITask) {
        this.orderProp = value;
    }
}