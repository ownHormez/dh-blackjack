import { Card } from "./Card";
export declare class Deck {
    cards: Card[];
    constructor(cards: Card[]);
    cardCount(): number;
    addCard(card: Card): void;
    getCardValues(): number[];
}
