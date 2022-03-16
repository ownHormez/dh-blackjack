import { CardAce } from "./Cards/CardAce";

export class CardCalculator {
    calculate(cards: CardInterface[]): CardCalculatorValue
    {
        let calculated = 0;
        let sub = 0;
        
        cards.forEach((card, index, array) => {
            if (card instanceof CardAce) {
                calculated += 1;                   
                
                if (sub <= 10) {
                    sub += card.value;
                } else {
                    sub += 1;
                }
            } else {
                calculated += card.value;
                sub += card.value;
            }
        });
        
        return {
            value: calculated,
            sub: sub
        };
    }
}
