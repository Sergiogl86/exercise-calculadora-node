const prompt = require("prompt");
const { suma, resta, multiplicación, division } = require("./calculator");

prompt.start();

prompt.get(["numeroA", "numeroB"], (err, result) => {
  if (err) {
    return console.log("Error!");
  }
  if (!Number.isNaN(+result.numeroA) && !Number.isNaN(+result.numeroB)) {
    console.log(suma(result.numeroA, result.numeroB));

    console.log(resta(result.numeroA, result.numeroB));

    console.log(multiplicación(result.numeroA, result.numeroB));

    console.log(division(result.numeroA, result.numeroB));
  } else {
    console.log("Error!");
    process.exit(9);
  }
});
