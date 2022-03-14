import { Card } from "../Card";

export class CardQueen extends Card {
  value: number = 10;
  label: string = 'Q';

  constructor(color: string) {
    super(color);
  }
}
