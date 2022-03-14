import { CardAce } from '../Game/Cards/CardAce';
import { CardEight } from '../Game/Cards/CardEight';
import { CardNine } from '../Game/Cards/CardNine';
import { CardTen } from '../Game/Cards/CardTen';
import { CardSeven } from '../Game/Cards/CardSeven';
import { Deck } from '../Game/Deck';
import { DeckShuffler } from '../Game/DeckShuffler';

describe('Deck Shuffler', () => {
  const shuffler = new DeckShuffler();

  test('Can Riffle Deck', () => {
    const deck = new Deck([
      new CardAce('spade'), // 11
      new CardTen('spade'), // 10
      new CardNine('spade'), // 9
      new CardEight('spade'), // 8
      new CardSeven('spade'), // 7
    ]);

    const riffled = shuffler.riffle(deck);

    expect(riffled.getCardValues()).toEqual([11, 9, 10, 8, 7]);
  });

  test('Can Shuffle Decks', () => {
    const deck1 = new Deck([
      new CardAce('spade'), // 11
      new CardTen('spade'), // 10
      new CardNine('spade'), // 9
      new CardEight('spade'), // 8
      new CardSeven('spade'), // 7
    ]);

    const deck2 = new Deck([
      new CardSeven('spade'), // 7
      new CardEight('spade'), // 8
      new CardNine('spade'), // 9
      new CardTen('spade'), // 10
      new CardAce('spade'), // 11
    ]);

    const shuffled = shuffler.shuffle([deck1, deck2]);

    expect(shuffled[0].getCardValues()).toEqual([11, 9, 10, 8, 7]);
    expect(shuffled[1].getCardValues()).toEqual([7, 9, 8, 10, 11]);
  });
});
