import { ComputerPlayerService } from "../core/services/computer-player-service";
import { CardsService } from '../core/services/cards-service';
import { CardCollection } from '../core/entities/card-collection';
import { Card } from '../core/entities/card';
import { CardValue, Suite } from '../core/enums/enums';
import { TableState } from '../core/entities/table-state';

describe('ComputerPlayerService', () => {
  beforeEach(() => {});

  it('selectCardToPlay should return last card if I have only one card left', () => {
    // arrange
    let myHand = new CardCollection();
    let lastCard = new Card();
    lastCard.cardValue = CardValue.Five;
    lastCard.suite = Suite.Diamonds;
    myHand.add(lastCard);

    let computerPlayerService = new ComputerPlayerService();

    // table state
    let tableState = new TableState();

    // act
    let response  = computerPlayerService.selectCardToPlay(myHand, tableState)

    // assert
    if(response)
    {
      expect(response.cardValue).toBe(CardValue.Five);
      expect(response.suite).toBe(Suite.Diamonds);
    }
  });

});
