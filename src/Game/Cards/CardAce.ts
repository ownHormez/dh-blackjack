import { Card } from "../Card";

export class CardAce extends Card {
  value: number = 11;
  label: string = 'A';

  constructor(color: string) {
    super(color);
  }
}
