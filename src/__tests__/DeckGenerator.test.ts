import { DeckGenerator } from '../Game/DeckGenerator';

describe('Deck Generator', () => {
  const generator = new DeckGenerator();

  test('Generates a deck', () => {
    expect(typeof generator.generate()).toBe('object');
  });

  test('Generates a 52 cards deck', () => {
    expect(generator.generate().cardCount()).toBe(52);
  });
});
