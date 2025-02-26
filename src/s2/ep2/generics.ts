// - Dupliquez dans S2 EP2 le fichier generic.ts de la S2 EP1, modifiez la fonction premierElement pour accepter uniquement des tableaux qui ne sont pas vides.
// - Utilisez une contrainte sur le type générique en vous appuyant sur le concept de types possédant une propriété length.
type NonEmptyArray<T> = [T, ...T[]];

function premierElement<T>(tableau: NonEmptyArray<T>): T {
  if (tableau.length === 0) {
    throw new Error("Le tableau est vide");
  }
  return tableau[0];
}

export function generics() {
  const tableau: NonEmptyArray<number> = [1, 2, 3];
  const tableau2: NonEmptyArray<string> = [""];
  // const tableauEmpty: NonEmptyArray<string> = [];
  console.log("S02 EP2===============================");
  console.log(premierElement(tableau));
  console.log(premierElement(tableau2));
  // console.log(premierElement(tableauEmpty));
  console.log("===============================");
  console.log();
}
