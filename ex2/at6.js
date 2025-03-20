/* Atividade 6: Crie uma funççao chamada nth, que recebe uma lista e um número, e retorna o elemento na
posição fornecida na lista (com zero referindo-se ao primeiro elemento) ou undefined quando não há tal
elemento. */

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    return list;
}

function nth(list, number) {
    if (!list) return undefined;
    if (number === 0) return list.valor;
    return nth(list.restante, number - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));