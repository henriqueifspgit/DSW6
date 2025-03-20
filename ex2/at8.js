/* Atividade 8. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso. */

function formatDate(dateString) {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let [day, month, year] = dateString.split("/");
    return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
}

console.log(formatDate("22/04/1983"));
