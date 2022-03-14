import { Card } from "../Card";

export class CardKing extends Card {
  value: number = 10;
  label: string = 'K';

  constructor(color: string) {
    super(color);
  }
}
