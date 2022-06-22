import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../data/tasks.service';
import { ITask } from '../types';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BodyComponent implements OnInit {

    constructor(
        private ref: ChangeDetectorRef,
        private tasksService: TasksService,
    ) { }

    @Input()
    items: ITask[] = [];

    @Input()
    orderProp: keyof ITask = 'deadline';

    ngOnInit(): void {
        this.items = this.tasksService.getData();
    }

    updateTasks() {
        this.ref.detectChanges();
        console.log('updating')
    }
}