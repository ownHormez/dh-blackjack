import { Card } from "../Card";

export class CardJack extends Card {
  value: number = 10;
  label: string = 'J';

  constructor(color: string) {
    super(color);
  }
}
