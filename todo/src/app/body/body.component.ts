import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { TasksService } from '../data/tasks.service';
import { ITask } from '../types';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
})

export class BodyComponent implements OnInit {

    constructor(
        private tasksService: TasksService,
    ) { }

    items: ITask[] = [];

    @Input() orderProp: keyof ITask = 'deadline';

    ngOnInit(): void {
        this.items = this.tasksService.getData();
    }
}
