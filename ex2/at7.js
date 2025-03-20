/* Atividade 7: Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um
array de arrays em um único array que contém todos os elementos dos arrays originais. */


function JuntaArrays(arrays) {
    return arrays.reduce((flat, current) => flat.concat(current), []);
}

console.log(JuntaArrays([[1, 2, 3], [4, 5], [6]]));