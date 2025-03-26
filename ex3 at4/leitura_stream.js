import fs from "fs";

function lerArquivoEmStream() {
    let init = Date.now();

    const stream = fs.createReadStream("dados.txt", { encoding: "utf-8" });

    stream.on("data", (chunk) => {
        console.log("Chunk recebido:", chunk);
    });

    stream.on("end", () => {
        let end = Date.now();
        console.log(`Tempo de leitura (Stream): ${end - init} ms`);
    });

    stream.on("error", (err) => {
        console.error("Erro ao ler o arquivo:", err);
    });
}

lerArquivoEmStream();