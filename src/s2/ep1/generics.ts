function premierElement<T>(tableau: T[]): T {
  return tableau[0];
}

export function generics() {
  const tableau = [1, 2, 3];
  const tableau2 = ["a", "b", "c"];
  const tableau3 = [{ a: 1 }, { b: 2 }, { c: 3 }];
  console.log("S02 EP1===============================");
  console.log(premierElement(tableau));
  console.log(premierElement(tableau2));
  console.log(premierElement(tableau3));
  console.log("===============================");
  console.log();
}
