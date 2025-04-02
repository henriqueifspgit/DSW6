import fs from "fs";

function readFileAsText(filePath, encoding = "utf8") {
    return fs.readFileSync(filePath, encoding); // Retorna string com encoding UTF-8
}

// Exporta as funções como um módulo ES6
export { readFileAsText };