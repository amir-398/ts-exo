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
exports.animaux = animaux;
var Animal = /** @class */ (function () {
    function Animal(nom) {
        this.nom = nom;
    }
    Animal.prototype.seDeplacer = function () {
        console.log("L'animal ".concat(this.nom, " se d\u00E9place."));
    };
    return Animal;
}());
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom) {
        return _super.call(this, nom) || this;
    }
    Chien.prototype.seDeplacer = function () {
        console.log("Le chien ".concat(this.nom, " court."));
    };
    return Chien;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom) {
        return _super.call(this, nom) || this;
    }
    Chat.prototype.seDeplacer = function () {
        console.log("Le chat ".concat(this.nom, " saute."));
    };
    return Chat;
}(Animal));
function faireSeDeplacer(animaux) {
    for (var _i = 0, animaux_1 = animaux; _i < animaux_1.length; _i++) {
        var animal = animaux_1[_i];
        animal.seDeplacer();
    }
}
function animaux() {
    console.log("S04 EP2===============================");
    var animaux = [new Chien("Rex"), new Chat("Miaou")];
    faireSeDeplacer(animaux);
    console.log("===============================");
    console.log();
}
