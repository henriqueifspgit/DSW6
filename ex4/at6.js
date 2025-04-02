/* Refatore o seguinte trecho de código para utilizar async/await: */

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    for (let i = 1; i <= 3; i++) {
        await delay();
        console.log(`${i}s`);
    }
}

umPorSegundo();