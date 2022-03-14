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
        var newDeck = new Deck_1.Deck([]);
        for (var x = 0; x < half; ++x) {
            newDeck.addCard(deck.cards[x]);
            newDeck.addCard(deck.cards[x + half]);
        }
        // handle edge case for decks with odd number of cards
        if (total % 2) {
            newDeck.addCard(deck.cards[total]);
        }
        return newDeck;
    };
    return DeckShuffler;
}());
exports.DeckShuffler = DeckShuffler;
