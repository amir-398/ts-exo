// modifiez l’interface Personne pour ajouter :

// - Une propriété en lecture seule id de type number.
// - Une propriété optionnelle adresse qui est elle-même un objet. Déclarez une interface Adresse avec :
//   - rue : string
//   - ville : string

interface Adresse {
  rue: string;
  ville: string;
}

interface Personne {
  readonly id: number;
  nom: string;
  age: number;
  adresse?: Adresse;
}

function afficherPersonneAvancee(personne: Personne) {
  if (personne.adresse) {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`
    );
  } else {
    console.log(
      `Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`
    );
  }
}

export function personne() {
  const personne2 = {
    id: 1,
    nom: "Amir",
    age: 27,
    adresse: { rue: "123 Rue de la Paix", ville: "Paris" },
  };

  const personne3 = {
    id: 2,
    nom: "John",
    age: 30,
  };

  afficherPersonneAvancee(personne2);
  afficherPersonneAvancee(personne3);
}
