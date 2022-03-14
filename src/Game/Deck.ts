import { Card } from "./Card";

export class Deck {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  cardCount(): number {
    return this.cards.length;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  getCardValues(): number[] {
    return this.cards.map(a => a.value);
  }

  // getCard
}
