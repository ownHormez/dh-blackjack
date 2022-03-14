"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var Deck = /** @class */ (function () {
    function Deck(cards) {
        this.cards = cards;
    }
    Deck.prototype.cardCount = function () {
        return this.cards.length;
    };
    Deck.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Deck.prototype.getCardValues = function () {
        return this.cards.map(function (a) { return a.value; });
    };
    return Deck;
}());
exports.Deck = Deck;
