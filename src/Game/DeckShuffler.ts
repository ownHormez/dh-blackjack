import { Card } from "./Card";
import { Deck } from "./Deck"

export class DeckShuffler {
    shuffle(decks: Deck[]): Deck[] {
        decks.forEach((deck, index, array) => {
            array[index] = this.riffle(deck);
        }, this);

        return decks;
    }

    riffle(deck: Deck) {
        const total = deck.cardCount();
        const half: number = Math.floor(total / 2);

        const cards: Card[] = [];
      
        for (let x = 0; x < half; x++) {
            cards.push(deck.cards[x]);
            cards.push(deck.cards[x + half]);
        }

        if (total % 2) {
            // edge case, decks with odd number of cards
            cards.push(deck.cards[total-1]);
        }
      
        return new Deck(cards);
    }
}
