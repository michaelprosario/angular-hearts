import { CardCollection } from "../core/entities/card-collection";
import { Card } from '../core/entities/card';
import { CardValue, Suite } from '../core/enums/enums';
import { CardsService } from "../core/services/cards-service";

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

  it('#hasQueenOfSpades should work', () => {
    // arrange
    const service = new CardsService();

    // act
    let cards = service.createFullDeck();
    let response: boolean = cards.hasQueenOfSpades();

    // assert
    expect(response).toEqual(true);
  });

  it('#getHighestCardInSuite should work', () => {
    // arrange
    let cards = new CardsService().createFullDeck();

    // act
    let card = cards.getHighestCardInSuite(Suite.Hearts);

    // assert
    expect(card?.cardValue).toEqual(CardValue.Ace);
  });

  it('#getHighestCardInSuite should work on empty deck', () => {
    // arrange
    let cards = new CardCollection();

    // act
    let card = cards.getHighestCardInSuite(Suite.Hearts);

    // assert
    expect(card).toBeUndefined();
  });

  it('#getSmallestCardInSuite should work', () => {
    // arrange
    let cards = new CardsService().createFullDeck();

    // act
    let card = cards.getSmallestCardInSuite(Suite.Hearts);

    // assert
    expect(card?.cardValue).toEqual(CardValue.Two);
  });

  it('#getSmallerCardInSuite should work', () => {
    // arrange
    let cards = new CardsService().createFullDeck();
    let card = new Card();
    card.cardValue = CardValue.Queen;
    card.suite = Suite.Spades;

    // act
    let response = cards.getHighestCardBelowCard(card);

    // assert
    if(response){
      expect(response.suite).toEqual(Suite.Spades);
      expect(response.cardValue).toEqual(CardValue.Jack);
    }
  });

  it('#getSmallerCardInSuite should return undefined', () => {
    // arrange
    let cards = new CardsService().createFullDeck();
    let card = new Card();
    card.cardValue = CardValue.Two;
    card.suite = Suite.Spades;

    // act
    let response = cards.getHighestCardBelowCard(card);

    // assert
    expect(response).toBeUndefined();
  });

  it('#hasQueenOfSpades should work if queen does not exist', () => {
    // arrange
    let cards = new CardCollection();

    // act
    let response: boolean = cards.hasQueenOfSpades();

    // assert
    expect(response).toEqual(false);
  });



});
