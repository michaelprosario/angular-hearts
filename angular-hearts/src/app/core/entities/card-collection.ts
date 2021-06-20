import { Card } from './card';

export class CardCollection
{
  add(card: Card) {
    throw new Error("Method not implemented.");
  }
  hasCard(card: Card): any {
    throw new Error("Method not implemented.");
  }
  cards: Array<Card> = [];
}
