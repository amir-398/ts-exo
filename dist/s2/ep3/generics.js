"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generics = generics;
function getProperty(obj, key) {
    return obj[key];
}
function generics() {
    var voiture = {
        marque: "Toyota",
        modele: "Corolla",
        annee: 2020,
    };
    console.log("S02 EP3===============================");
    console.log(getProperty(voiture, "marque"));
    console.log(getProperty(voiture, "annee"));
    // Erreur de compilation car la propriété couleur n'existe pas dans l'interface Voiture
    // console.log(getProperty(voiture, "couleur"));
    console.log("===============================");
    console.log();
}
