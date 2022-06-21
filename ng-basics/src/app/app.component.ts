import { Component } from '@angular/core';

export interface ICard {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-basics';

  toggle = true;

  cards: ICard[] = [
    {
      title: 'Card1',
      text: 'This is first card',
    },
    {
      title: 'This is Card2',
      text: 'This is second card',
    },
    {
      title: 'Last card',
      text: 'No cards afner this',
    },
  ]

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
