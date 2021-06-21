import { Suite, CardValue } from '../enums/enums';
import { Card } from './card';

export class CardCollection
{

  cards: Array<Card> = [];

  countCardsInSuite(suite: Suite) : number {
    let collection = this.cards.filter(c => c.suite === suite);
    return collection.length;
  }

  hasQueenOfSpades() : boolean {
    let collection = this.cards.filter(c => c.suite === Suite.Spades && c.cardValue === CardValue.Queen);
    return collection.length > 0;
  }

  getHighestCardInSuite(suite: Suite): Card | undefined {
    let collection = this.cards.filter(c => c.suite === suite);
    if(collection.length === 0){
      return undefined;
    }else{
      let highestCardValue = -1;
      let response: Card = new Card();
      for(let card of collection){
        if(card.cardValue > highestCardValue){
          response = card;
          highestCardValue = card.cardValue;
        }
      }

      return response;
    }
  }

  getHighestCardBelowCard(card: Card): Card | undefined {
    let collection = this.cards.filter(c => c.suite === card.suite);
    if(collection.length === 0){
      return undefined;
    }else{
      let cardValue = card.cardValue;
      let cards = collection.filter(card => card.cardValue < cardValue);
      if(cards.length > 0){
        cards.sort((a,b) => a.cardValue - b.cardValue);
        return cards[cards.length - 1];
      }else{
        return undefined;
      }
    }
  }

  getSmallestCardInSuite(suite: Suite): Card | undefined {
    let collection = this.cards.filter(c => c.suite === suite);
    if(collection.length === 0){
      return undefined;
    }else{
      let lowestCardValue = 10000000;
      let response: Card = new Card();
      for(let card of collection){
        if(card.cardValue < lowestCardValue){
          response = card;
          lowestCardValue = card.cardValue;
        }
      }

      return response;
    }
  }

  getCardCount(){
    return this.cards.length;
  }

  add(card: Card) {
    if(!card){
      throw new Error("Card is required");
    }

    let response = this.cards.find(c => c.cardId === card.cardId);
    if(response === undefined){
      this.cards.push(card);
    }
  }

  printCards() {
    console.log(this.cards);
  }

  getCard() : Card | undefined {
    return this.cards.pop();
  }

  remove(card: Card){
    if(!card){
      throw new Error("Card is required");
    }

    let response = this.cards.findIndex(c => c.cardId === card.cardId);
    if(response != -1){
      this.cards.splice(response, 1);
    }
  }

  hasCard(card: Card): boolean {
    if(!card)
      throw new Error("card is not defined");

    let response = this.cards.find(c => c.cardId === card.cardId);
    return response !== undefined;
  }

  shuffle(){
    this.shuffleCards(this.cards);
  }

  private shuffleCards(array: Array<Card>) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
