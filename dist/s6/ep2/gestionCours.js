"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestionCours = gestionCours;
var mon_module_1 = require("mon-module");
var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (NiveauCours = {}));
var GestionCours = /** @class */ (function () {
    function GestionCours() {
        this.etudiants = [];
        this.cours = [];
        this.inscriptions = new Map();
    }
    GestionCours.prototype.rechercherElement = function (collection, code) {
        return collection.find(function (element) { return element.code === code; });
    };
    GestionCours.prototype.inscrireEtudiant = function (coursCode, etudiant) {
        var cours = this.rechercherElement(this.cours, coursCode);
        if (!cours) {
            throw new Error("Cours avec le code '".concat(coursCode, "' non trouv\u00E9."));
        }
        if (!this.inscriptions.has(coursCode)) {
            this.inscriptions.set(coursCode, []);
        }
        var inscrits = this.inscriptions.get(coursCode);
        if (inscrits.some(function (e) { return e.id === etudiant.id; })) {
            (0, mon_module_1.logger)("".concat(etudiant.nom, " est d\u00E9j\u00E0 inscrit au cours '").concat(cours.titre, "'."));
            return;
        }
        inscrits.push(etudiant);
        (0, mon_module_1.logger)("".concat(etudiant.nom, " inscrit au cours '").concat(cours.titre, "'."));
    };
    GestionCours.prototype.afficherInscriptions = function () {
        var _this = this;
        (0, mon_module_1.logger)("\nListe des Inscriptions");
        if (this.inscriptions.size === 0) {
            (0, mon_module_1.logger)("Aucune inscription pour le moment.");
            return;
        }
        this.inscriptions.forEach(function (etudiants, coursCode) {
            var cours = _this.rechercherElement(_this.cours, coursCode);
            (0, mon_module_1.logger)("\nCours : ".concat(cours === null || cours === void 0 ? void 0 : cours.titre, " (").concat(coursCode, ")"));
            if (etudiants.length === 0) {
                (0, mon_module_1.logger)("Aucun étudiant inscrit.");
            }
            else {
                etudiants.forEach(function (etudiant) {
                    (0, mon_module_1.logger)("".concat(etudiant.nom, " (").concat(etudiant.niveau, ")"));
                });
            }
        });
    };
    return GestionCours;
}());
function gestionCours() {
    var gestionCours = new GestionCours();
    gestionCours.cours.push({
        code: "TS101",
        titre: "Introduction à TypeScript",
        niveau: NiveauCours.Debutant,
    }, {
        code: "JS202",
        titre: "JavaScript avancé",
        niveau: NiveauCours.Intermediaire,
    });
    var etudiant1 = { id: 1, nom: "Alice", niveau: "Débutant" };
    var etudiant2 = { id: 2, nom: "Bob", niveau: "Intermédiaire" };
    console.log("S06 EP2===============================");
    gestionCours.inscrireEtudiant("TS101", etudiant1);
    gestionCours.inscrireEtudiant("JS202", etudiant2);
    gestionCours.inscrireEtudiant("TS101", etudiant1);
    gestionCours.afficherInscriptions();
    console.log("===============================");
    console.log();
}
