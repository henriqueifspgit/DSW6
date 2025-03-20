/* Atividade 11: O método some da classe array retorna true para verificar se pelo menos um dos elementos
desse array atende a um critério especificado por uma função passada como argumento. Os arrays possuem
também um método chamado every. Este retorna true quando a função fornecida retorna true para cada
elemento no array. De certa forma, some é uma versão do operador || que atua em arrays, e every é como o
operador &&.
Implemente a sua própria função every como uma função que recebe um array e uma função como
parâmetros. Escreva essa versão utilizando um loop. */

function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

const Numeros = [2, 4, 6, 8];

console.log(myEvery(Numeros, function(num) {
    return num % 2 === 0; // Verifica se todos os números são pares
})); // Saída: true

const NumerosMisturados = [2, 4, 5, 8];

console.log(myEvery(NumerosMisturados, function(num) {
    return num % 2 === 0; // Verifica se todos os números são pares
})); // Saída: false
