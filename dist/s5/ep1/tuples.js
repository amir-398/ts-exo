"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuples = tuples;
function creerScore(nom, score) {
    return [nom, score];
}
function afficherScore(score) {
    console.log("Le joueur ".concat(score[0], " a un score de ").concat(score[1]));
}
function tuples() {
    console.log("S05 EP1===============================");
    var score = creerScore("John", 100);
    afficherScore(score);
    console.log("===============================");
    console.log();
}
