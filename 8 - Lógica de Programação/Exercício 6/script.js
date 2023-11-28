//Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

let numero = prompt("Digite um número:");
for (let i = 1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + numero * i);
}