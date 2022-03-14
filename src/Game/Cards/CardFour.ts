import { Card } from "../Card";

export class CardFour extends Card {
  value: number = 4;
  label: string = '4';

  constructor(color: string) {
    super(color);
  }
}
