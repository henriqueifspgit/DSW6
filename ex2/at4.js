/* Atividade 4: Também escreva uma função listToArray que produza um array a partir de uma lista. */

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.valor);
        list = list.restante;
    }
    return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

