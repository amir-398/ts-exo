"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generics = generics;
function premierElement(tableau) {
    return tableau[0];
}
function generics() {
    var tableau = [1, 2, 3];
    var tableau2 = ["a", "b", "c"];
    var tableau3 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    console.log("S02 EP1===============================");
    console.log(premierElement(tableau));
    console.log(premierElement(tableau2));
    console.log(premierElement(tableau3));
    console.log("===============================");
    console.log();
}
