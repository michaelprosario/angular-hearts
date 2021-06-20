import { CardCollection } from "../core/entities/card-collection";
import { Card } from '../core/entities/card';
import { CardValue, Suite } from '../core/enums/enums';

// Straight Jasmine testing without Angular's testing support
describe('CardCollection', () => {
  let cardCollection: CardCollection;
  beforeEach(() => { cardCollection = new CardCollection(); });

  it('CardId should work correctly', () => {
    // arrange
    const card = new Card();
    card.cardValue = CardValue.Ace;
    card.suite = Suite.Spades;

    // act
    const cardValue = card.cardValue;

    // assert
    expect(cardValue).toEqual(card.suite * 100 + card.cardValue);
  });

  /*
  it('#addCard should work happy case', () => {
    // arrange
    const card = new Card();
    card.cardValue = CardValue.Ace;
    card.suite = Suite.Spades;

    // act
    cardCollection.add(card);

    // assert
    expect(cardCollection.hasCard(card)).toBeTruthy();
  });
  */

});
