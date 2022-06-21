import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ITask, TASK_DEFAULT_VALUE } from '../types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.currentItem = {...TASK_DEFAULT_VALUE};
    this.editMode = false;
  }

  currentItem: ITask = {...TASK_DEFAULT_VALUE};
  editMode: boolean = false;

  @Output() closeFormEvent = new EventEmitter<void>();

  closeForm() {
    return this.closeFormEvent.emit();
  }

  getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  }

  @Output() createItemEvent = new EventEmitter<ITask>();
  @Output() editItemEvent = new EventEmitter<ITask>();

  setChanges() {
    if (this.editMode) {
      return this.editItemEvent.emit({...this.currentItem});
    }

    return this.createItemEvent.emit({...this.currentItem});
  }

  handleSave() {
    this.setChanges();
    this.closeForm();
  }
}
