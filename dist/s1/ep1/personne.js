"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personne = personne;
function afficherPersonne(personne) {
    console.log("S01 EP1===============================");
    console.log("Bonjour, je m'appelle ".concat(personne.nom, " et j'ai ").concat(personne.age, " ans."));
    console.log("===============================");
    console.log();
}
function personne() {
    var personne1 = { nom: "Amir", age: 27 };
    afficherPersonne(personne1);
}
