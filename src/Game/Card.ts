export abstract class Card implements CardInterface {
  color?: string;
  label?: string;
  value: number = 0;

  constructor(color: string) {
    this.color = color;
  }
}
