"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narrowing = narrowing;
function traiterValeur(valeur) {
    if (typeof valeur === "string") {
        console.log("string length: ".concat(valeur.length));
    }
    else {
        console.log("number * 2: ".concat(valeur * 2));
    }
}
function narrowing() {
    console.log("S03 EP1===============================");
    traiterValeur("Hello");
    traiterValeur(10);
    console.log("===============================");
    console.log();
}
