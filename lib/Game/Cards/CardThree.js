"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardThree = void 0;
var Card_1 = require("../Card");
var CardThree = /** @class */ (function (_super) {
    __extends(CardThree, _super);
    function CardThree(color) {
        var _this = _super.call(this, color) || this;
        _this.value = 3;
        _this.label = '3';
        return _this;
    }
    return CardThree;
}(Card_1.Card));
exports.CardThree = CardThree;
