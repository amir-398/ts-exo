interface Personne {
  nom: string;
  age: number;
}

function afficherPersonne(personne: Personne) {
  console.log("S01 EP1===============================");
  console.log(
    `Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`
  );
  console.log("===============================");
  console.log();
}

export function personne() {
  const personne1 = { nom: "Amir", age: 27 };
  afficherPersonne(personne1);
}
