import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/data/types';
import { TasksService } from '../../services/tasks.service';

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
    }
}