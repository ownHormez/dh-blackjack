import { Deck } from "./Deck";
export declare class DeckGenerator {
    readonly colors: readonly ["club", "spade", "heart", "diamond"];
    generate(): Deck;
}
