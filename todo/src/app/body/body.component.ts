import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../types';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemToEdit: ITask;

  @Input() 
  set newItem(value: ITask) {
    if (value) {
      this.items.push(value);
    }    
  }

  @Input()
  set orderProp(prop: keyof ITask) {
    if (prop) {
      this.items = [...this.items.sort((a, b) => {
        const first = a[prop] ?? -1;
        const second = b[prop] ?? -1;
        
        return first > second ? 1: -1;
      })]
    }
  }

  items: ITask[] = [
    {
      done: false,
      title: 'To do app',
      subtasks: [
        {
          description: 'create Angular project',
          done: true,
        },
        {
          description: 'create lyout',
          done: true,
        },
        {
          description: 'make functionality',
          done: true,
        },
        {
          description: 'cover with tests',
          done: true,
        },
      ],
      estimated: 2,
      deadline: new Date('June 25, 2022'),
      progress: 10,
      description: 'Create to do app using Angular',
    },
    {
      done: false,
      title: 'Buy products',
      subtasks: [
        {
          description: 'Go to "Biedronka" and buy some meals',
          done: true,
        },
        {
          description: 'create lyout',
          done: true,
        },
        {
          description: 'make functionality',
          done: true,
        },
        {
          description: 'cover with tests',
          done: true,
        },
      ],
      estimated: 20,
      deadline: new Date('June 30, 2022'),
      progress: 70,
      description: 'Go to "Biedronka" and buy some meals',
    },
    {
      done: false,
      title: 'Test',
      subtasks: [],
      estimated: 30,
      deadline: new Date('June 26, 2022'),
      progress: 45,
      description: 'create app',
    }
  ];

  deleteItem(item: ITask) {
    this.items = this.items.filter(i => i !== item);
  }
}
