import { CardValue, Suite } from '../enums/enums';

export class Card
{
  cardValue: CardValue = 2;
  suite: Suite = Suite.Spades;

  get cardId() : number
  {
    return this.suite * 100 + this.cardValue;
  }
}
