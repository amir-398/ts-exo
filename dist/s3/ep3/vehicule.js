"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicule = vehicule;
function isVehicule(obj) {
    if (typeof obj === "object" &&
        "marque" in obj &&
        "annee" in obj &&
        typeof obj.marque === "string" &&
        typeof obj.annee === "number") {
        return true;
    }
    else {
        return false;
    }
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log("Le v\u00E9hicule ".concat(obj.marque, " de l'ann\u00E9e ").concat(obj.annee, " est valide."));
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
function vehicule() {
    console.log("S03 EP3===============================");
    afficherVehicule({ marque: "Toyota", annee: 2020 });
    afficherVehicule({ marque: "Toyota" });
    console.log("===============================");
    console.log();
}
