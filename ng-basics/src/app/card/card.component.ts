import {Component, Input, OnInit} from '@angular/core';
import { ICard } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent{

    @Input() card: ICard = {
        title: 'c',
        text: 't',
    }
    @Input() index: number = 0;

    cardDate: Date = new Date();

    textColor: string = 'black';

    inputHandler(value: string) {
        this.card.title = value;
    }

    changeTitle() {
        this.card.title = 'Is changed'
    }
}