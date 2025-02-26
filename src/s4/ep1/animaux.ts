interface IAnimal {
  nom: string;
  seDeplacer(): void;
}

class Animal implements IAnimal {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  seDeplacer(): void {
    console.log(`L'animal ${this.nom} se déplace.`);
  }
}

export function animaux() {
  console.log("S04 EP1===============================");
  const animal = new Animal("Chat");
  animal.seDeplacer();
  console.log("===============================");
  console.log();
}
