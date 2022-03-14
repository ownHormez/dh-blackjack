"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckGenerator = void 0;
var CardAce_1 = require("./Cards/CardAce");
var CardEight_1 = require("./Cards/CardEight");
var CardFive_1 = require("./Cards/CardFive");
var CardFour_1 = require("./Cards/CardFour");
var CardJack_1 = require("./Cards/CardJack");
var CardKing_1 = require("./Cards/CardKing");
var CardNine_1 = require("./Cards/CardNine");
var CardQueen_1 = require("./Cards/CardQueen");
var CardSeven_1 = require("./Cards/CardSeven");
var CardSix_1 = require("./Cards/CardSix");
var CardTen_1 = require("./Cards/CardTen");
var CardThree_1 = require("./Cards/CardThree");
var CardTwo_1 = require("./Cards/CardTwo");
var Deck_1 = require("./Deck");
var DeckGenerator = /** @class */ (function () {
    function DeckGenerator() {
        this.colors = [
            'club',
            'spade',
            'heart',
            'diamond'
        ];
    }
    DeckGenerator.prototype.generate = function () {
        var cards = [];
        this.colors.forEach(function (color) {
            cards.push(new CardAce_1.CardAce(color));
            cards.push(new CardTwo_1.CardTwo(color));
            cards.push(new CardThree_1.CardThree(color));
            cards.push(new CardFour_1.CardFour(color));
            cards.push(new CardFive_1.CardFive(color));
            cards.push(new CardSix_1.CardSix(color));
            cards.push(new CardSeven_1.CardSeven(color));
            cards.push(new CardEight_1.CardEight(color));
            cards.push(new CardNine_1.CardNine(color));
            cards.push(new CardTen_1.CardTen(color));
            cards.push(new CardJack_1.CardJack(color));
            cards.push(new CardQueen_1.CardQueen(color));
            cards.push(new CardKing_1.CardKing(color));
        });
        return new Deck_1.Deck(cards);
    };
    return DeckGenerator;
}());
exports.DeckGenerator = DeckGenerator;
