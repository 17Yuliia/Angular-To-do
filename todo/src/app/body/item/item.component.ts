import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask,  TASK_DEFAULT_VALUE} from 'src/app/types';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    @Input() item: ITask = TASK_DEFAULT_VALUE;

    getProgressLineStyle() {
        return `linear-gradient(to right,rgb(89, 222, 120) ${this.item.progress}%, rgb(232, 232, 232) ${this.item.progress}%)`
    }

    @Output() deleteEvent = new EventEmitter<ITask>();

    deleteItem() {
        return this.deleteEvent.emit(this.item);
    }
}
