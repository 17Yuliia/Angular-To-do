import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TASK_DEFAULT_VALUE } from 'src/data/constants';
import { Mode } from 'src/data/enums';
import { ITask } from 'src/data/types';
import { TasksService } from 'src/services/tasks.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {

    constructor(
        private tasksService: TasksService
    ) { }

    @Input()
    item: ITask = TASK_DEFAULT_VALUE;

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