//10. Faça um programa que lê o tamanho dos lados de um quadrado e imprime um quadrado do mesmo tamanho usando asteriscos.

let tamanho = prompt ("Doigite o tamanho dos lados do quadrado:");
for(let i = 0; i < tamanho; i++) {
    let linha = '';
    for (let j = 0; j < tamanho; j++) {
        linha += '*';
    }
console.log(linha);
}