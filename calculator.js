const chalk = require("chalk");

const suma = (a, b) => `La suma es: ${a} + ${b} = ${chalk.blue(+a + +b)}`;

const resta = (a, b) => `La resta es: ${a} - ${b} = ${chalk.red(a - b)}`;

const multiplicación = (a, b) =>
  `La multiplicación es: ${a} x ${b} = ${chalk.yellow(a * b)}`;

const division = (a, b) =>
  `La división es: ${a} / ${b} = ${chalk.green(a / b)}`;

module.exports = { suma, resta, multiplicación, division };
