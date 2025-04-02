/* Crie uma função que após 5 segundos dobre o resultado de um número passado como
argumento. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador. */

function dobrarDe5Segundos(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 5000);
    });
}

dobrarDe5Segundos(10).then((resultado) => {
    console.log(`Resultado: ${resultado}`);
});