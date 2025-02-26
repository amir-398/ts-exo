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

class Chien extends Animal {
  constructor(nom: string) {
    super(nom);
  }

  seDeplacer(): void {
    console.log(`Le chien ${this.nom} court.`);
  }
}

class Chat extends Animal {
  constructor(nom: string) {
    super(nom);
  }
  seDeplacer(): void {
    console.log(`Le chat ${this.nom} saute.`);
  }
}

function faireSeDeplacer(animaux: IAnimal[]): void {
  for (const animal of animaux) {
    animal.seDeplacer();
  }
}

export function animaux() {
  console.log("S04 EP2===============================");
  const animaux = [new Chien("Rex"), new Chat("Miaou")];
  faireSeDeplacer(animaux);
  console.log("===============================");
  console.log();
}
