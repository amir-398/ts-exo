interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

type PersonnePro = Employe | Client;

// - Créez une fonction afficherInfoProfessionnelle qui prend un paramètre de type PersonnePro.

// - Dans la fonction, utilisez le narrowing (par exemple, avec l'opérateur in) pour :

//   - Vérifier si l’objet possède la propriété poste et afficher :
//     - "Employé: [nom] travaille comme [poste]."
//     - Sinon, vérifier s’il possède la propriété entreprise et afficher : "Client: [nom] est associé à l'entreprise [entreprise]."

function afficherInfoProfessionnelle(personnePro: PersonnePro) {
  if ("poste" in personnePro) {
    console.log(
      `Employé: ${personnePro.nom} travaille comme ${personnePro.poste}.`
    );
  } else {
    console.log(
      `Client: ${personnePro.nom} est associé à l'entreprise ${personnePro.entreprise}.`
    );
  }
}

export function personnePro() {
  const employe: Employe = { nom: "John", poste: "Développeur" };
  const client: Client = { nom: "Jane", entreprise: "Google" };
  console.log("S01 EP3===============================");
  afficherInfoProfessionnelle(employe);
  afficherInfoProfessionnelle(client);
  console.log("===============================");
  console.log();
}
