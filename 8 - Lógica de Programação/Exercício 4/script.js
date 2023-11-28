// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.


//Função que verifica se o número é primo ou não. 
function ehPrimo(n) {
    //Se o número for menor que 2, ele não é primo.
    if (n < 2) {
        return false;
    }
    // Se o número for 2, ele é primo.
    if (n == 2) {
        return true;
    }
    //Se o número for par e maior que 2, ele não é primo.
    if (n % 2 == 0) {
        return false;
    }
    // Verifica se o número é divisível por algum número ímpar entre 3 e a raiz quadrada de n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    // Se não for divisível por nenhum número, ele é primo.
    return true;
}

//Loop que percorre todos os números de 0 a 100
for (let n = 0; n <= 100; n++) {
    //Se o número for primo, imprime na tela
    if (ehPrimo(n)) {
        console.log(n);

    }
}


//O programa tem duas partes principais:
// uma função que verifica se um número é primo ou não,
// e um loop que percorre todos os números de 0 a 100 e imprime os que são primos na tela.

//A função que verifica se um número é primo ou não se chama ehPrimo e recebe um parâmetro n, que é o número a ser testado.
//A função retorna true se o número for primo, e false se não for.
// A função segue os seguintes passos:

//Se o número for menor que 2, ele não é primo, pois o menor número primo é 2. Então, a função retorna false.

//Se o número for 2, ele é primo, pois 2 é o único número par que é primo. Então, a função retorna true.

//Se o número for par e maior que 2, ele não é primo, pois todo número par maior que 2 é divisível por 2.
//Então, a função retorna false.

//Se o número for ímpar e maior que 2, ele pode ser primo ou não.
//Para verificar isso, a função usa um loop for que começa em 3 e vai até a raiz quadrada de n, incrementando de 2 em 2.
// Isso significa que a função só testa os divisores ímpares de n, pois os divisores pares já foram descartados.
// Dentro do loop, a função verifica se n é divisível por algum desses divisores usando o operador %,
// que retorna o resto da divisão. Se o resto for zero, significa que n é divisível por esse divisor, e portanto, não é primo.
// Então, a função retorna false.
/// Se o loop terminar sem encontrar nenhum divisor, significa que n não é divisível,
// por nenhum número entre 3 e a raiz quadrada de n, e portanto, é primo. Então, a função retorna true.

//OBS.:
//O loop que percorre todos os números de 0 a 100 e imprime os que são primos na tela se chama for e usa uma variável n,
//que começa em 0 e vai até 100, incrementando de 1 em 1.
//Isso significa que o loop testa todos os números inteiros de 0 a 100.
//Dentro do loop, o programa chama a função ehPrimo passando o valor de n como argumento.
//Se a função retornar true, significa que (n) é primo, e o programa imprime (n) na tela usando a função console.log .
//Se a função retornar false, significa que (n) não é primo, e o programa não faz nada.







