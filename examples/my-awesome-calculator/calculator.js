const prompt = require("prompt-sync")({ sigint: true });

const n1 = prompt("Enter first number: ");
const n2 = prompt("Enter second number: ");

let addition = Number(n1) + Number(n2);
let multiplication = Number(n1) + Number(n2);

console.log(`Addition: ${addition}`);
console.log(`Multiplication: ${multiplication}`);
