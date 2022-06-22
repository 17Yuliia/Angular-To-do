import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TasksService } from '../data/tasks.service';
import { IFormData, ITask, Mode, TASK_DEFAULT_VALUE } from '../types';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    constructor(private tasksService: TasksService) { }

    ngOnInit(): void {
        this.formData = this.tasksService.getFormData();
    }

    formData: IFormData;

    @Output() closeFormEvent = new EventEmitter<void>();

    closeForm() {
        return this.closeFormEvent.emit();
    }

    getCurrentDate() {
        return new Date().toISOString().split("T")[0];
    }

    setChanges() {
        if (this.formData.mode === Mode.add) {
            this.formData.item.id = Math.random();

            this.tasksService.addData({...this.formData.item});
        } else {
            this.tasksService.editData({...this.formData.item});
        }

    }

    handleSave() {
        this.setChanges();
        this.closeForm();
    }
}
