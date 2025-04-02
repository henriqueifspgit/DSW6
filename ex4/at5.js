/* Considere a função a seguir. Ela é uma função de soma que precisará ter como resultado um
número par. Para isso, você precisará criar os seguintes callbacks: 
    -callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com
    sucesso e que o número somado é par.
    -callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número
    impar (resultado da soma).
*/

function somar(a, b, callbackSucesso, callbackError) {
    let resultado = a + b;
    
    if (resultado % 2 === 0) {
        callbackSucesso(resultado);
    } else {
        callbackError(resultado);
    }
}

function callbackSucesso(resultado) {
    console.log(`✅ Operação concluída com sucesso! O número ${resultado} é par.`);
}

function callbackError(resultado) {
    console.log(`❌ Erro: A soma resultou em ${resultado}, que é ímpar.`);
}

// Testes com callbacks
somar(2, 4, callbackSucesso, callbackError);
somar(5, 2, callbackSucesso, callbackError);
somar(9, 1, callbackSucesso, callbackError);
somar(6, 5, callbackSucesso, callbackError);
// ------------------------------------------

// Versão com Promises
function somarPromise(a, b) {
    return new Promise((resolve, reject) => {
        let resultado = a + b;
        if (resultado % 2 === 0) {
            resolve(`✅ Operação concluída com sucesso! O número ${resultado} é par.`);
        } else {
            reject(`❌ Erro: A soma resultou em ${resultado}, que é ímpar.`);
        }
    });
}

// Testes com Promises
somarPromise(3, 5)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));

somarPromise(6, 4)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));

somarPromise(2, 7)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));