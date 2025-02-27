"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testModule = testModule;
var mon_module_1 = require("mon-module");
function testModule() {
    console.log("S06 EP1===============================");
    // alerter("Hello, world!");
    (0, mon_module_1.logger)("Hello, world!");
    console.log("===============================");
    console.log();
}
