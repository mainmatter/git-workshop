const prompt = require("prompt-sync")({ sigint: true });

const n1 = prompt("Enter first number: ");
const n2 = prompt("Enter second number: ");

let result = Number(n1) + Number(n2);

console.log(`Your result is: ${result}`);
