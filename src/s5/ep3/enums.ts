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

function deplacer(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
}

export function enums() {
  console.log("S05 EP3===============================");
  const point: [number, number] = [5, 5];
  const direction: Direction = Direction.NORD;
  const nouveauPoint = deplacer(point, direction);
  console.log(`Point initial: ${point[0]}, ${point[1]}`);
  console.log(`Direction: ${direction}`);
  console.log(`Nouveau point: ${nouveauPoint[0]}, ${nouveauPoint[1]}`);
  console.log("===============================");
  console.log();
}
