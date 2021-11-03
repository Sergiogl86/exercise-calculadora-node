const chalk = require("chalk");

const suma = (a, b) => `La suma es ${chalk.blue(+a + +b)}`;

const resta = (a, b) => `La resta es ${chalk.red(a - b)}`;

const multiplicación = (a, b) => `La multiplicación es ${chalk.yellow(a * b)}`;

const division = (a, b) => `La división es ${chalk.green(a / b)}`;

module.exports = { suma, resta, multiplicación, division };
