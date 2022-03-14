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
exports.CardNine = void 0;
var Card_1 = require("../Card");
var CardNine = /** @class */ (function (_super) {
    __extends(CardNine, _super);
    function CardNine(color) {
        var _this = _super.call(this, color) || this;
        _this.value = 9;
        _this.label = '9';
        return _this;
    }
    return CardNine;
}(Card_1.Card));
exports.CardNine = CardNine;
