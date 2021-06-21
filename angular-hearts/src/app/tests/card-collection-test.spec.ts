import { CardCollection } from "../core/entities/card-collection";
import { Card } from '../core/entities/card';
import { CardValue, Suite } from '../core/enums/enums';
import { CardsService } from "../core/services/cards-service";

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
    const cardId = card.cardId;

    // assert
    expect(cardId).toEqual(card.suite * 100 + card.cardValue);
  });

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

  it('#countCardsInSuite should work', () => {
    // arrange
    const service = new CardsService();

    // act
    let cards = service.createFullDeck();
    cards.shuffle();
    let count = cards.countCardsInSuite(Suite.Hearts);

    // assert
    expect(count).toEqual(13);
  });

  it('#countCardsInSuite should return zero on empty deck', () => {
    // arrange
    let cards = new CardCollection();

    // act    
    let count = cards.countCardsInSuite(Suite.Hearts);

    // assert
    expect(count).toEqual(0);
  });

});
