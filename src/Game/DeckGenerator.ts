import { Card } from "./Card";
import { CardAce } from "./Cards/CardAce";
import { CardEight } from "./Cards/CardEight";
import { CardFive } from "./Cards/CardFive";
import { CardFour } from "./Cards/CardFour";
import { CardJack } from "./Cards/CardJack";
import { CardKing } from "./Cards/CardKing";
import { CardNine } from "./Cards/CardNine";
import { CardQueen } from "./Cards/CardQueen";
import { CardSeven } from "./Cards/CardSeven";
import { CardSix } from "./Cards/CardSix";
import { CardTen } from "./Cards/CardTen";
import { CardThree } from "./Cards/CardThree";
import { CardTwo } from "./Cards/CardTwo";
import { Deck } from "./Deck";

export class DeckGenerator {
    readonly colors = [
        'club',
        'spade',
        'heart',
        'diamond'
    ] as const;

    generate(): Deck {
        const cards: Card[] = [];

        this.colors.forEach(color => {
            cards.push(new CardAce(color));
            cards.push(new CardTwo(color));
            cards.push(new CardThree(color));
            cards.push(new CardFour(color));
            cards.push(new CardFive(color));
            cards.push(new CardSix(color));
            cards.push(new CardSeven(color));
            cards.push(new CardEight(color));
            cards.push(new CardNine(color));
            cards.push(new CardTen(color));
            cards.push(new CardJack(color));
            cards.push(new CardQueen(color));
            cards.push(new CardKing(color));
        });

        return new Deck(cards);
    }
}
