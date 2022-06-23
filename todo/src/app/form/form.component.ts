import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Mode } from 'src/data/enums';
import { TasksService } from '../../services/tasks.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormComponent implements OnInit {

    constructor(
        private tasksService: TasksService,
        private formBuilder: FormBuilder
    ) { }

    mode: Mode;
    addEditForm: FormGroup;

    ngOnInit(): void {
        this.addEditForm = this.formBuilder.group({            
            title: ['', [
                Validators.required, 
                Validators.minLength(7),
                Validators.maxLength(20),
            ]],
            description: ['', [Validators.maxLength(150)]],
            deadline: ['', [Validators.required]],
            progress: ['', [
                Validators.required,
                Validators.min(0),
                Validators.max(100),
            ]],
            estimated: ['', [
                Validators.required,
                Validators.min(1),
                Validators.max(120),
            ]],
            id: [''],
        })

        const formData = this.tasksService.getFormData();

        this.mode = formData.mode;
        this.addEditForm.patchValue(formData.item);
    }

    @Output() closeFormEvent = new EventEmitter<void>();

    closeForm() {
        return this.closeFormEvent.emit();
    }

    getCurrentDate() {
        return new Date().toISOString().split("T")[0];
    }

    setChanges() {
        const changes = this.addEditForm.getRawValue();

        if (this.mode === Mode.add) {
            changes.id = Math.random(); //quick decision only for now

            this.tasksService.addData({...changes});
        } else {
            this.tasksService.editData({...changes});
        }

    }

    handleSave() {
        if (this.addEditForm.valid) {
            this.setChanges();
            this.closeForm();
        }
    }

    checkInputIsValid(name: string) {
        const formControl = this.addEditForm.controls[name];

        return !formControl.valid && (formControl.dirty || formControl.touched);
    }
}