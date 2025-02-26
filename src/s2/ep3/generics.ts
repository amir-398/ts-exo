interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function generics() {
  const voiture: Voiture = {
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
