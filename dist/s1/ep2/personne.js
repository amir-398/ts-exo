"use strict";
// modifiez l’interface Personne pour ajouter :
Object.defineProperty(exports, "__esModule", { value: true });
exports.personne = personne;
function afficherPersonneAvancee(personne) {
    if (personne.adresse) {
        console.log("Bonjour, je m'appelle ".concat(personne.nom, " (ID: ").concat(personne.id, "), j'ai ").concat(personne.age, " ans et j'habite au ").concat(personne.adresse.rue, ", ").concat(personne.adresse.ville, "."));
    }
    else {
        console.log("Bonjour, je m'appelle ".concat(personne.nom, " (ID: ").concat(personne.id, ") et j'ai ").concat(personne.age, " ans."));
    }
}
function personne() {
    var personne2 = {
        id: 1,
        nom: "Amir",
        age: 27,
        adresse: { rue: "123 Rue de la Paix", ville: "Paris" },
    };
    var personne3 = {
        id: 2,
        nom: "John",
        age: 30,
    };
    console.log("S01 EP2===============================");
    afficherPersonneAvancee(personne2);
    afficherPersonneAvancee(personne3);
    console.log("===============================");
    console.log();
}
