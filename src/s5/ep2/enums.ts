enum Direction {
  NORD,
  SUD,
  EST,
  OUEST,
}

function vecteurDirection(direction: Direction): [number, number] {
  switch (direction) {
    case Direction.NORD:
      return [0, -1];
    case Direction.SUD:
      return [0, 1];
    case Direction.EST:
      return [1, 0];
    case Direction.OUEST:
      return [-1, 0];
    default:
      return [0, 0];
  }
}

export function enums() {
  console.log("S05 EP2===============================");
  for (const direction of Object.values(Direction).filter(
    (value) => typeof value === "number"
  )) {
    const vecteur = vecteurDirection(direction as Direction);
    console.log(
      `Vecteur de la direction ${direction}: ${vecteur[0]}, ${vecteur[1]}`
    );
  }
  console.log("===============================");
  console.log();
}
