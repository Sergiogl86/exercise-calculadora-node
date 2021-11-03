const { suma, resta, multiplicación, division } = require("./calculator");

const [numeroA, numeroB] = [...process.argv.slice(2)];

console.log(suma(numeroA, numeroB));

console.log(resta(numeroA, numeroB));

console.log(multiplicación(numeroA, numeroB));

console.log(division(numeroA, numeroB));
