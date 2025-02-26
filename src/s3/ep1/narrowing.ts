function traiterValeur(valeur: string | number) {
  if (typeof valeur === "string") {
    console.log(`string length: ${valeur.length}`);
  } else {
    console.log(`number * 2: ${valeur * 2}`);
  }
}

export function narrowing() {
  console.log("S03 EP1===============================");
  traiterValeur("Hello");
  traiterValeur(10);
  console.log("===============================");
  console.log();
}
