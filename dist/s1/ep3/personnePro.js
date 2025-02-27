"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnePro = personnePro;
// - Créez une fonction afficherInfoProfessionnelle qui prend un paramètre de type PersonnePro.
// - Dans la fonction, utilisez le narrowing (par exemple, avec l'opérateur in) pour :
//   - Vérifier si l’objet possède la propriété poste et afficher :
//     - "Employé: [nom] travaille comme [poste]."
//     - Sinon, vérifier s’il possède la propriété entreprise et afficher : "Client: [nom] est associé à l'entreprise [entreprise]."
function afficherInfoProfessionnelle(personnePro) {
    if ("poste" in personnePro) {
        console.log("Employ\u00E9: ".concat(personnePro.nom, " travaille comme ").concat(personnePro.poste, "."));
    }
    else {
        console.log("Client: ".concat(personnePro.nom, " est associ\u00E9 \u00E0 l'entreprise ").concat(personnePro.entreprise, "."));
    }
}
function personnePro() {
    var employe = { nom: "John", poste: "Développeur" };
    var client = { nom: "Jane", entreprise: "Google" };
    console.log("S01 EP3===============================");
    afficherInfoProfessionnelle(employe);
    afficherInfoProfessionnelle(client);
    console.log("===============================");
    console.log();
}
