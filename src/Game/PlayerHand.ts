import { Card } from "./Card";

export class PlayerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    handValue(): number {
        return this.cards
            .map(a => a.value)
            .reduce((a, b) => a + b, 0);
    }

    hit(): boolean {
        return false;
    }

    stand(): boolean {
        return false;
    }

    split(): boolean {
        // check if player can split
        return false;
    }

    doubleDown(): boolean {
        return false;
    }

    hasBlackJack(): boolean {
        return this.handValue() === 21;
    }

    hasBusted(): boolean {
        return this.handValue() > 21;
    }
}
