interface Personne {
  nom: string;
  age: number;
}

function afficherPersonne(personne: Personne) {
  console.log(
    `Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`
  );
}

export function personne() {
  const personne1 = { nom: "Amir", age: 27 };
  afficherPersonne(personne1);
}
