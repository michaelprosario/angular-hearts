import { CardCollection } from '../entities/card-collection';
import { TableState } from '../entities/table-state';
import { Card } from '../entities/card';

export class ComputerPlayerService
{
  selectCardToPlay(hand: CardCollection, tableState: TableState): Card | undefined {
    if(!hand)
      throw new Error("hand is required");
    if(!tableState)
      throw new Error("tableState is required");

    if(hand.getCardCount() === 0)
    {
      throw new Error("hand has no cards to select");
    }
    else if(hand.getCardCount() === 1)
    {
      let card = hand.getCard();
      if(card)
        return card;
    }

    return undefined;

  }

}
