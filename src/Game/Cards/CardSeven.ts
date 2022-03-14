import { Card } from "../Card";

export class CardSeven extends Card {
  value: number = 7;
  label: string = '7';

  constructor(color: string) {
    super(color);
  }
}
