const myFunction = require('./myFunction'); //importe a função que você quer testar

test('testa se myFunction retorna o esperado', () => {
    expect(myFunction(5, 10)).toBe(15);
});