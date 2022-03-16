import { CardCalculator } from '../Game/CardCalculator';
import { CardAce } from '../Game/Cards/CardAce';
import { CardTen } from '../Game/Cards/CardTen';
import { CardFour } from '../Game/Cards/CardFour';
import { CardSix } from '../Game/Cards/CardSix';
import { CardSeven } from '../Game/Cards/CardSeven';
import { CardThree } from '../Game/Cards/CardThree';
import { CardTwo } from '../Game/Cards/CardTwo';
import { CardQueen } from '../Game/Cards/CardQueen';
import { CardEight } from '../Game/Cards/CardEight';
import { CardNine } from '../Game/Cards/CardNine';
import { CardFive } from '../Game/Cards/CardFive';

describe('Card Calculator', () => {
  const calculator = new CardCalculator();

  test('Calculates two aces', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(2);
    expect(calculator.calculate(hand1).sub).toBe(12);
  });

  test('Calculates three aces', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardAce('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(3);
    expect(calculator.calculate(hand1).sub).toBe(13);
  });

  test('Calculates four aces', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardAce('spade'),
        new CardAce('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(4);
    expect(calculator.calculate(hand1).sub).toBe(14);
  });

  test('Calculates ace and ten', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardTen('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(11);
    expect(calculator.calculate(hand1).sub).toBe(21);
  });

  test('Calculates ace and four and six', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardFour('spade'),
        new CardSix('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(11);
    expect(calculator.calculate(hand1).sub).toBe(21);
  });

  test('Calculates ace and four and seven', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardFour('spade'),
        new CardSeven('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(12);
  });

  test('Calculates ace and four', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardFour('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(5);
    expect(calculator.calculate(hand1).sub).toBe(15);
  });

  test('Calculates ace and four and ace', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardFour('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(6);
    expect(calculator.calculate(hand1).sub).toBe(16);
  });

  test('Calculates ace and ace and four and three and two and ace', () => {
    const hand1 = [
        new CardAce('spade'),
        new CardAce('spade'),
        new CardFour('spade'),
        new CardThree('spade'),
        new CardTwo('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(12);
  });

  test('Calculates eleven and ace', () => {
    const hand1 = [
        new CardTwo('spade'),
        new CardFour('spade'),
        new CardThree('spade'),
        new CardTwo('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(12);
  });

  test('Calculates ten and ace and ace', () => {
    const hand1 = [
        new CardQueen('spade'),
        new CardAce('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(12);
  });

  test('Calculates twelve and ace', () => {
    const hand1 = [
        new CardQueen('spade'),
        new CardTwo('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(13);
  });

  test('Calculates two and ace', () => {
    const hand1 = [
        new CardTwo('spade'),
        new CardAce('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(3);
    expect(calculator.calculate(hand1).sub).toBe(13);
  });

  test('Calculates three and six', () => {
    const hand1 = [
        new CardThree('spade'),
        new CardSix('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(9);
    expect(calculator.calculate(hand1).sub).toBe(9);
  });

  test('Calculates eight and nine', () => {
    const hand1 = [
        new CardEight('spade'),
        new CardNine('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(17);
    expect(calculator.calculate(hand1).sub).toBe(17);
  });

  test('Calculates ten and ace ande five and six', () => {
    const hand1 = [
        new CardTen('spade'),
        new CardAce('spade'),
        new CardFive('spade'),
        new CardSix('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(22);
    expect(calculator.calculate(hand1).sub).toBe(32);
  });

  test('Calculates two and two and three and four and six', () => {
    const hand1 = [
        new CardTwo('spade'),
        new CardTwo('spade'),
        new CardThree('spade'),
        new CardFour('spade'),
        new CardSix('spade'),
    ];

    expect(calculator.calculate(hand1).value).toBe(17);
    expect(calculator.calculate(hand1).sub).toBe(17);
  });
});
