import { Card } from '../entities/card';
import { CardCollection } from '../entities/card-collection';

export class CardsService
{
  createFullDeck(): CardCollection
  {
    let cardValues = [2,3,4,5,6,7,8,9,10,20,30,40,50];
    let suiteValues = [1,2,3,4];

    let cards = new CardCollection();

    for(let suite of suiteValues){
      for(let cardValue of cardValues)
      {
        let card = new Card();
        card.cardValue = cardValue;
        card.suite = suite;
        cards.add(card);
      }
    }

    return cards;
  }
}
