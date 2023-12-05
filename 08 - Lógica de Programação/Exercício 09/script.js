//9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

let idades = [];
let maioresDe18 = 0;

for (let i = 0; i < 10; i++) {
    let idade = prompt("Digite uma idade:");
    idades.push(parseInt(idade));
    if (idade >= 18) {
        maioresDe18++;
    }
}

console.log("A quantidade de pessoas com idade maior ou igual a 18 anos é:" + maioresDe18);