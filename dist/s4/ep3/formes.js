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
exports.formes = formes;
var Forme = /** @class */ (function () {
    function Forme() {
    }
    Forme.prototype.calculerSurface = function () {
        return 0;
    };
    return Forme;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(largeur, hauteur) {
        var _this = _super.call(this) || this;
        _this.largeur = largeur;
        _this.hauteur = hauteur;
        return _this;
    }
    Rectangle.prototype.calculerSurface = function () {
        return this.largeur * this.hauteur;
    };
    return Rectangle;
}(Forme));
var Cercle = /** @class */ (function (_super) {
    __extends(Cercle, _super);
    function Cercle(rayon) {
        var _this = _super.call(this) || this;
        _this.rayon = rayon;
        return _this;
    }
    Cercle.prototype.calculerSurface = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    return Cercle;
}(Forme));
function formes() {
    console.log("S04 EP3===============================");
    var formes = [new Rectangle(10, 20), new Cercle(5)];
    for (var _i = 0, formes_1 = formes; _i < formes_1.length; _i++) {
        var forme = formes_1[_i];
        console.log("La surface de la forme est ".concat(forme.calculerSurface()));
    }
    console.log("===============================");
    console.log();
}
