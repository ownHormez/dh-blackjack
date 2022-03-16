"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardCalculator = void 0;
var CardAce_1 = require("./Cards/CardAce");
var CardCalculator = /** @class */ (function () {
    function CardCalculator() {
    }
    CardCalculator.prototype.calculate = function (cards) {
        var calculated = 0;
        var sub = 0;
        cards.forEach(function (card, index, array) {
            if (card instanceof CardAce_1.CardAce) {
                calculated += 1;
                if (sub <= 10) {
                    sub += card.value;
                }
                else {
                    sub += 1;
                }
            }
            else {
                calculated += card.value;
                sub += card.value;
            }
        });
        return {
            value: calculated,
            sub: sub
        };
    };
    return CardCalculator;
}());
exports.CardCalculator = CardCalculator;
