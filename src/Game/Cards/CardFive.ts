import { Card } from "../Card";

export class CardFive extends Card {
  value: number = 5;
  label: string = '5';

  constructor(color: string) {
    super(color);
  }
}
