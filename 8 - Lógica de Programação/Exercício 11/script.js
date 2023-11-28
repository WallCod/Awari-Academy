//11. Faça um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos.

let altura = prompt("Digite a altura do triângulo:");
for(let i = 1; i <= altura; i++) {
    let linha = '';
    for (let j = 0; j < i; j++) {
        linha +- '* ';
    }
    console.log(linha);
}

//Neste programa, o usuário é solicitado a inserir a altura do triângulo através da função prompt().
//Em seguida, o programa usa dois loops for para iterar até a altura inserida.
//Para cada iteração, um asterisco é adicionado à linha. 
//Finalmente, a linha é impressa no console. Isso efetivamente imprime um triângulo da altura inserida usando asteriscos. 