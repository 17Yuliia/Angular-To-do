import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FORM_ITEM_DEFAULT_VALUE } from 'src/data/constants';
import { TasksService } from '../../services/tasks.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

    constructor(private tasksService: TasksService) { }

    showForm() {
        this.tasksService.setFormData(FORM_ITEM_DEFAULT_VALUE);
        this.tasksService.setFormIsOpen(true);
    }
}