"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffler = exports.Greeter = void 0;
var DeckShuffler_1 = require("./Game/DeckShuffler");
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
exports.shuffler = new DeckShuffler_1.DeckShuffler();
