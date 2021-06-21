import { Suite } from '../enums/enums';
import { CardCollection } from './card-collection';

export class TableState
{
  heartsBroken: boolean = false;
  leadingSuite: Suite = Suite.Clubs;
  cardsOnTable: CardCollection = new CardCollection();
}
