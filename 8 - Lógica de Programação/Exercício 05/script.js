// 5. Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

//Loop externo que percorre os números de 1 a 10
for (let i = 1; i <= 10; i++) {
 //Imprime o título da tabuada do número 1
    console.log("Tabuada do" + i + ":");
//Loop interno que percorre os números de 1 a 10
    for (let j = 1; j <= 10; j++) {
//Imprime o resultado da multiplicação de i por j
        console.log(i + "x" + j + "=" + (i * j));
    }
//Imprime uma linha em branco para separar as tabuadas
}