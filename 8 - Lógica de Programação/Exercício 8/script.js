//Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

let idades = [];
for (let i = 0; i < 5; i++) {
let idade = prompt("Digite uma idade:");
idades.push(parseInt(idade));
}

let soma = idades.reduce((a, b) => a + b, 0);
let media = soma / idades.length;

console.log("A média das idades digitadas é:" + media);