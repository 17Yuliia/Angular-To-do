import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../types';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    constructor() { }

    @Output() orderByEvent = new EventEmitter<keyof ITask>();

    orderBy(prop: keyof ITask) {
        return this.orderByEvent.emit(prop);
    }
}