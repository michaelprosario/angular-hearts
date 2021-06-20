import { Card } from './card';

export class CardCollection
{
  cards: Array<Card> = [];

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

  hasCard(card: Card): any {
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
