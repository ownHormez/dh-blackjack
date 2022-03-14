import { Card } from "../Card";

export class CardTen extends Card {
  value: number = 10;
  label: string = '10';

  constructor(color: string) {
    super(color);
  }
}
