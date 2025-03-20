/* Atividade 5: Adicione uma função auxiliar prepend, que recebe um elemento e uma lista, e cria uma nova
lista que adiciona o elemento na frente da lista de entrada. */

function prepend(element, list) {
    return { valor: element, restante: list };
}

let lista = [1,2,3,4,5]

console.log(prepend(0, lista));