/* Atividade 10. Suponha que o método toUpperCase não existisse em uma string. Implemente uma função
toUpperCase que retorna o mesmo resultado da original. */

function toUpperCase(str) {
    let upperStr = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        // Verifica se o caractere está em minúsculo (código entre 'a' e 'z')
        if (charCode >= 97 && charCode <= 122) {
            // Converte o caractere para maiúsculo
            upperStr += String.fromCharCode(charCode - 32);
        } else {
            // Se não for minúsculo, mantém o caractere original
            upperStr += str[i];
        }
    }

    return upperStr;
}

console.log(toUpperCase('Ola Mundo!'));