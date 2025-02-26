import { logger } from "mon-module";

interface Etudiant {
  id: number;
  nom: string;
  niveau: string;
}

interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours;
}

enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
}

class GestionCours {
  etudiants: Etudiant[] = [];
  cours: Cours[] = [];
  inscriptions: Map<string, Etudiant[]> = new Map();

  private rechercherElement<T extends { code: string }>(
    collection: T[],
    code: string
  ): T | undefined {
    return collection.find((element) => element.code === code);
  }

  inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
    const cours = this.rechercherElement(this.cours, coursCode);
    if (!cours) {
      throw new Error(`Cours avec le code '${coursCode}' non trouvé.`);
    }

    if (!this.inscriptions.has(coursCode)) {
      this.inscriptions.set(coursCode, []);
    }

    const inscrits = this.inscriptions.get(coursCode)!;
    if (inscrits.some((e) => e.id === etudiant.id)) {
      logger(`${etudiant.nom} est déjà inscrit au cours '${cours.titre}'.`);
      return;
    }

    inscrits.push(etudiant);
    logger(`${etudiant.nom} inscrit au cours '${cours.titre}'.`);
  }

  afficherInscriptions(): void {
    logger("\nListe des Inscriptions");
    if (this.inscriptions.size === 0) {
      logger("Aucune inscription pour le moment.");
      return;
    }

    this.inscriptions.forEach((etudiants, coursCode) => {
      const cours = this.rechercherElement(this.cours, coursCode);
      logger(`\nCours : ${cours?.titre} (${coursCode})`);
      if (etudiants.length === 0) {
        logger("Aucun étudiant inscrit.");
      } else {
        etudiants.forEach((etudiant) => {
          logger(`${etudiant.nom} (${etudiant.niveau})`);
        });
      }
    });
  }
}

export function gestionCours() {
  const gestionCours = new GestionCours();

  gestionCours.cours.push(
    {
      code: "TS101",
      titre: "Introduction à TypeScript",
      niveau: NiveauCours.Debutant,
    },
    {
      code: "JS202",
      titre: "JavaScript avancé",
      niveau: NiveauCours.Intermediaire,
    }
  );

  const etudiant1: Etudiant = { id: 1, nom: "Alice", niveau: "Débutant" };
  const etudiant2: Etudiant = { id: 2, nom: "Bob", niveau: "Intermédiaire" };

  console.log("S06 EP2===============================");

  gestionCours.inscrireEtudiant("TS101", etudiant1);
  gestionCours.inscrireEtudiant("JS202", etudiant2);
  gestionCours.inscrireEtudiant("TS101", etudiant1);

  gestionCours.afficherInscriptions();
  console.log("===============================");
  console.log();
}
