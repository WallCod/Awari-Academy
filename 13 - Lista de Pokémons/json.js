const objeto = {
    nome: 'Maria da Silva',
    idade: 30,
    atividade: 'dança'
};

const objetoToJSON = JSON.stringify(objeto);



// sem JSON.parse()
console.log(objetoToJSON);

// com JSON.parse()

console.log(JSON.parse(objetoToJSON));
