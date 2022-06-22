import { Component } from '@angular/core';
import { TasksService } from '../data/tasks.service';
import { FORM_ITEM_DEFAULT_VALUE } from '../types';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private tasksService: TasksService) { }

    showForm() {
        this.tasksService.setFormData(FORM_ITEM_DEFAULT_VALUE);
        this.tasksService.setFormIsOpen(true);
    }
}