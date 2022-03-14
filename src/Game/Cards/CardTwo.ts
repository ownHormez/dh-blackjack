import { Card } from "../Card";

export class CardTwo extends Card {
  value: number = 2;
  label: string = '2';

  constructor(color: string) {
    super(color);
  }
}
