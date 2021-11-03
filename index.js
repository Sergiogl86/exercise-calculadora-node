const prompt = require("prompt");
const { suma, resta, multiplicación, division } = require("./calculator");

const [numeroA, numeroB] = [...process.argv.slice(2)];

console.log(+numeroA);

console.log(+numeroB);

if (!Number.isNaN(+numeroA) && !Number.isNaN(+numeroB)) {
  console.log(suma(numeroA, numeroB));

  console.log(resta(numeroA, numeroB));

  console.log(multiplicación(numeroA, numeroB));

  console.log(division(numeroA, numeroB));
} else {
  console.log("Error!");
  prompt.start();
  prompt.get(["numeroA", "numeroB"], (err, result) => {
    if (err) {
      return console.log("Error!");
    }
    console.log(suma(result.numeroA, result.numeroB));

    console.log(resta(result.numeroA, result.numeroB));

    console.log(multiplicación(result.numeroA, result.numeroB));

    console.log(division(result.numeroA, result.numeroB));
  });
}
