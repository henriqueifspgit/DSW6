/* Crie uma função que retorne uma Promise seguindo as seguintes orientações:
    -Se o argumento da função não for um número, retorne uma promessa rejeitada instantaneamente e
    forneça uma mensagem de "erro" aos dados (em uma string);
    -Se os dados forem um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os
    dados "ímpares" (em uma string);
    -Se os dados forem um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os
    dados "par" (em uma string). */

function checaNumero(numero) {
    return new Promise((resolve, reject) => {
        if (typeof numero !== "number") {
            reject("Erro: O argumento não é um número!");
            return;
        }

        if (numero % 2 !== 0) {
            setTimeout(() => {
                resolve("Ímpares");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("Par");
            }, 2000);
        }
    });
}
    
checaNumero(5)
    .then((res) => console.log("✅ Resolução:", res))
    .catch((err) => console.log("❌ Rejeição:", err));

checaNumero(8)
    .then((res) => console.log("✅ Resolução:", res))
    .catch((err) => console.log("❌ Rejeição:", err));

checaNumero("abc")
    .then((res) => console.log("✅ Resolução:", res))
    .catch((err) => console.log("❌ Rejeição:", err));