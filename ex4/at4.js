/* Considere o seguinte código:
    firstPromise(numInt)
        .then(data => secondPromise(data))
        .then(data =>{
        console.log(data)
        }).catch(e => {
        console.log(e)
        }) */

function firstPromise(numInt) {
    return new Promise((resolve, reject) => {
        if (numInt > 2) {
            resolve(numInt);
        } else {
            reject("Erro: Número deve ser maior que 2!");
        }
    });
}

function secondPromise(data) {
    return new Promise((resolve, reject) => {
        if ((data + 1) % 2 === 0) {
            resolve(`Sucesso: ${data} + 1 = ${data+1} é par!`);
        } else {
            reject(`Erro: ${data} + 1 = ${data+1} é ímpar!`);
        }
    });
}

// Testando a função
firstPromise(3)
    .then(data => secondPromise(data))
    .then(data => {
        console.log("✅ Resolução:", data);
    })
    .catch(e => {
        console.log("❌ Rejeição:", e);
    });
    

firstPromise(1)
    .then(data => secondPromise(data))
    .then(data => {
        console.log("✅ Resolução:", data);
    })
    .catch(e => {
        console.log("❌ Rejeição:", e);
    });

firstPromise(4)
    .then(data => secondPromise(data))
    .then(data => {
        console.log("✅ Resolução:", data);
    })
    .catch(e => {
        console.log("❌ Rejeição:", e);
    });