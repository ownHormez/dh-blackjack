import { Card } from "../Card";

export class CardSix extends Card {
  value: number = 6;
  label: string = '6';

  constructor(color: string) {
    super(color);
  }
}
