"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckShuffler = void 0;
var Deck_1 = require("./Deck");
var DeckShuffler = /** @class */ (function () {
    function DeckShuffler() {
    }
    DeckShuffler.prototype.shuffle = function (decks) {
        var _this = this;
        decks.forEach(function (deck, index, array) {
            array[index] = _this.riffle(deck);
        }, this);
        return decks;
    };
    DeckShuffler.prototype.riffle = function (deck) {
        var total = deck.cardCount();
        var half = Math.floor(total / 2);
        var cards = [];
        for (var x = 0; x < half; x++) {
            cards.push(deck.cards[x]);
            cards.push(deck.cards[x + half]);
        }
        if (total % 2) {
            // edge case, decks with odd number of cards
            cards.push(deck.cards[total - 1]);
        }
        return new Deck_1.Deck(cards);
    };
    return DeckShuffler;
}());
exports.DeckShuffler = DeckShuffler;
