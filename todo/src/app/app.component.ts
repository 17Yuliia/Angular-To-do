import { Component } from '@angular/core';
import { ITask, TASK_DEFAULT_VALUE } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'todo';

    newItem: ITask;
    itemToEdit: ITask;
    editedItem: ITask;
    showForm: boolean = false;
    orderProp: keyof ITask = 'deadline';

    openForm() {
        this.showForm = true;
    }

    closeForm() {
        this.showForm = false;
    }

    addNewItem(item: ITask) {
        this.newItem = item;
    }

    setOrderProp(value: keyof ITask) {
        this.orderProp = value;
    }
}
