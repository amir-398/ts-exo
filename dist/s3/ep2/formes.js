"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formes = formes;
var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    Rectangle.prototype.calculerSurface = function () {
        return this.largeur * this.hauteur;
    };
    return Rectangle;
}());
var Cercle = /** @class */ (function () {
    function Cercle(rayon) {
        this.rayon = rayon;
    }
    Cercle.prototype.calculerSurface = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    return Cercle;
}());
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log("Ceci est un rectangle de surface ".concat(forme.calculerSurface()));
    }
    else {
        console.log("Ceci est un cercle de surface ".concat(forme.calculerSurface()));
    }
}
function formes() {
    console.log("S03 EP2===============================");
    afficherSurface(new Rectangle(10, 20));
    afficherSurface(new Cercle(5));
    console.log("===============================");
    console.log();
}
