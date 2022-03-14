import { Card } from "../Card";

export class CardNine extends Card {
  value: number = 9;
  label: string = '9';

  constructor(color: string) {
    super(color);
  }
}
