import React, {Component} from 'react';

class Componente extends Component {
    render() {
        return <h1> Eis o resultado do nosso componente, agora com "Classe". </h1>
    }
}

export default Componente;

/*

O que fizemos foi:

importar a biblioteca React em nosso arquivo;
definir uma função Componente(), por meio da sintaxe de arrow functions (funções de seta) de ES6;
retornar um título de nível 1 (h1), com o conteúdo “Eis o resultado do nosso componente.”;
exportar nossa função como um componente React, com o mesmo nome do arquivo (Componente).

*/