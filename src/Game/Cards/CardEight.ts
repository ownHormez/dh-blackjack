import { Card } from "../Card";

export class CardEight extends Card {
  value: number = 8;
  label: string = '8';

  constructor(color: string) {
    super(color);
  }
}
