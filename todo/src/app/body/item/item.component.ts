import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/data/tasks.service';
import { ITask,  Mode,  TASK_DEFAULT_VALUE} from 'src/app/types';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {

    constructor(
        private tasksService: TasksService
    ) { }

    ngOnInit(): void {
    }

    @Input() item: ITask = TASK_DEFAULT_VALUE;

    getProgressLineStyle() {
        return `linear-gradient(to right,rgb(89, 222, 120) ${this.item.progress}%, rgb(232, 232, 232) ${this.item.progress}%)`
    }

    editItem() {
        this.tasksService.setFormData({
            item: this.item,
            mode: Mode.edit,
        })
        this.tasksService.setFormIsOpen(true);
    }

    deleteItem() {
        this.tasksService.deleteData(this.item);
    }
}
