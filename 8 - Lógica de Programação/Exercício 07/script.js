//Faça um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.

let num = prompt("Digite um númerp:");
console.log("Números pares:");
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("Números ímpares:");
for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
