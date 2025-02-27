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
function enums() {
    console.log("S05 EP2===============================");
    for (var _i = 0, _a = Object.values(Direction).filter(function (value) { return typeof value === "number"; }); _i < _a.length; _i++) {
        var direction = _a[_i];
        var vecteur = vecteurDirection(direction);
        console.log("Vecteur de la direction ".concat(direction, ": ").concat(vecteur[0], ", ").concat(vecteur[1]));
    }
    console.log("===============================");
    console.log();
}
