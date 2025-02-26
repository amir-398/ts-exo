function creerScore(nom: string, score: number): [string, number] {
  return [nom, score];
}

function afficherScore(score: [string, number]): void {
  console.log(`Le joueur ${score[0]} a un score de ${score[1]}`);
}

export function tuples() {
  console.log("S05 EP1===============================");
  const score = creerScore("John", 100);
  afficherScore(score);
  console.log("===============================");
  console.log();
}
