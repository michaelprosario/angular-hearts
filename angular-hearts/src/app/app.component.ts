import { Component } from '@angular/core';
import { Card } from './core/entities/card';
import { CardCollection } from './core/entities/card-collection';
import { CardValue, Suite } from './core/enums/enums';
import { CardsService } from './core/services/cards-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){
    let cardsService = new CardsService();
    let collection = cardsService.createFullDeck();
    collection.shuffle();
    collection.printCards();
  }

}
