"use strict";
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
function animaux() {
    console.log("S04 EP1===============================");
    var animal = new Animal("Chat");
    animal.seDeplacer();
    console.log("===============================");
    console.log();
}
