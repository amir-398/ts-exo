"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enums = enums;
var Direction;
(function (Direction) {
    Direction[Direction["NORD"] = 0] = "NORD";
    Direction[Direction["SUD"] = 1] = "SUD";
    Direction[Direction["EST"] = 2] = "EST";
    Direction[Direction["OUEST"] = 3] = "OUEST";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
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
function deplacer(point, direction) {
    var _a = vecteurDirection(direction), dx = _a[0], dy = _a[1];
    return [point[0] + dx, point[1] + dy];
}
function enums() {
    console.log("S05 EP3===============================");
    var point = [5, 5];
    var direction = Direction.NORD;
    var nouveauPoint = deplacer(point, direction);
    console.log("Point initial: ".concat(point[0], ", ").concat(point[1]));
    console.log("Direction: ".concat(direction));
    console.log("Nouveau point: ".concat(nouveauPoint[0], ", ").concat(nouveauPoint[1]));
    console.log("===============================");
    console.log();
}
