import { alerter, logger } from "mon-module";

export function testModule() {
  console.log("S06 EP1===============================");
  // alerter("Hello, world!");
  logger("Hello, world!");
  console.log("===============================");
  console.log();
}
