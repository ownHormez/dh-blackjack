import { DeckShuffler } from "./Game/DeckShuffler";
import { DeckGenerator } from "./Game/DeckGenerator";

export const Greeter = (name: string) => `Hello ${name}`;

export const shuffler = new DeckShuffler();

export const generator = new DeckGenerator();

generator.generate();
