import fs from "fs";

async function lerArquivoDeUmaVez() {
    let init = Date.now();

    try {
        const data = await fs.promises.readFile("dados.txt", "utf-8");
        console.log(data.split("\n"));
    } catch (err) {
        console.error("Erro ao ler o arquivo:", err);
    }

    let end = Date.now();
    console.log(`Tempo de leitura (readFile): ${end - init} ms`);
}

lerArquivoDeUmaVez();