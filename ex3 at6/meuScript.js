import fs from "fs";
import readline from "readline";

const arquivo = process.argv[2];

if (!arquivo) {
    console.error("Uso: node meuScript.js <nome_do_arquivo>");
    process.exit(1);
}


const stream = fs.createReadStream(arquivo, { encoding: "utf-8" });

const leitor = readline.createInterface({
    input: stream,
    output: process.stdout,
    terminal: false
});

leitor.on("line", (linha) => {
    console.log("Linha:", linha);
});

leitor.on("close", () => {
    console.log("Leitura concluída!");
});

leitor.on("error", (err) => {
    console.error("Erro ao ler o arquivo:", err);
});