import { Card } from "../Card";

export class CardThree extends Card {
  value: number = 3;
  label: string = '3';

  constructor(color: string) {
    super(color);
  }
}
