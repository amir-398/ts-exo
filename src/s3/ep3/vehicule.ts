interface Vehicule {
  marque: string;
  annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
  if (
    typeof obj === "object" &&
    "marque" in obj &&
    "annee" in obj &&
    typeof obj.marque === "string" &&
    typeof obj.annee === "number"
  ) {
    return true;
  } else {
    return false;
  }
}

function afficherVehicule(obj: any): void {
  if (isVehicule(obj)) {
    console.log(
      `Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`
    );
  } else {
    console.log("Objet invalide pour un véhicule.");
  }
}

export function vehicule() {
  console.log("S03 EP3===============================");
  afficherVehicule({ marque: "Toyota", annee: 2020 });
  afficherVehicule({ marque: "Toyota" });
  console.log("===============================");
  console.log();
}
