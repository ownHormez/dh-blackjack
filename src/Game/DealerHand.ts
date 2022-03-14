import { Card } from "./Card";

export class DealerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    handValue(): number {
        return this.cards
            .map(a => a.value)
            .reduce((a, b) => a + b, 0);
    }

    hasBlackJack(): boolean {
        return this.handValue() === 21;
    }

    hasBusted(): boolean {
        return this.handValue() > 21;
    }
}
