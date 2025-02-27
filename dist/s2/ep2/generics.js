"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generics = generics;
function premierElement(tableau) {
    if (tableau.length === 0) {
        throw new Error("Le tableau est vide");
    }
    return tableau[0];
}
function generics() {
    var tableau = [1, 2, 3];
    var tableau2 = [""];
    // const tableauEmpty: NonEmptyArray<string> = [];
    console.log("S02 EP2===============================");
    console.log(premierElement(tableau));
    console.log(premierElement(tableau2));
    // console.log(premierElement(tableauEmpty));
    console.log("===============================");
    console.log();
}
