class Forme {
  calculerSurface(): number {
    return 0;
  }
}

class Rectangle extends Forme {
  largeur: number;
  hauteur: number;

  constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

class Cercle extends Forme {
  rayon: number;

  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  calculerSurface(): number {
    return Math.PI * this.rayon * this.rayon;
  }
}

export function formes() {
  console.log("S04 EP3===============================");
  const formes = [new Rectangle(10, 20), new Cercle(5)];
  for (const forme of formes) {
    console.log(`La surface de la forme est ${forme.calculerSurface()}`);
  }
  console.log("===============================");
  console.log();
}
