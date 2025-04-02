/* Implemente uma função chamada doAction que retona uma Promise. A promise deve ser
resolvida 2 segundos após a sua chamada e deve retornar a mensagem olá mundo. */

function doAction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Olá Mundo!");
        }, 2000);
    });
}

doAction().then((mensagem) => {
    console.log(mensagem);
})