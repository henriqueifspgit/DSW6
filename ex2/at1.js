/*  Atividade 1. Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
    das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
    propriedades com os mesmos nomes.
    Forneça ao protótipo/classe de Vec dois métodos, plus e minus, que recebem outro vetor como parâmetro e
    retornam um novo vetor que contém a soma ou diferença dos valores x e y dos dois vetores (o vetor atual e o
    parâmetro).
    Adicione uma propriedade getter length ao protótipo que calcula o comprimento do vetor - isto é, a distância
    do ponto (x, y) à origem (0, 0).
    Teste sua classe criando dois objetos com new e demonstrando as saídas das operações dos métodos
    implementados na classe*/
    
    class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Método Soma para somar dois vetores
  Soma(anotherVec) {
    return new Vec(this.x + anotherVec.x, this.y + anotherVec.y);
  }

  // Método Subtrai para subtrair dois vetores
  Subtrai(anotherVec) {
    return new Vec(this.x - anotherVec.x, this.y - anotherVec.y);
  }

  // Propriedade getter que calcula o comprimento do vetor (distância à origem)
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

let vec1 = new Vec(3, 4);
let vec2 = new Vec(1, 2);

// Somando os vetores
let sumVec = vec1.Soma(vec2);
console.log(`Soma: (${sumVec.x}, ${sumVec.y})`);  // Resultado esperado: (4, 6)

// Subtraindo os vetores
let diffVec = vec1.Subtrai(vec2);
console.log(`Diferença: (${diffVec.x}, ${diffVec.y})`);  // Resultado esperado: (2, 2)

// Mostrando o comprimento do primeiro vetor
console.log(`Comprimento de vec1: ${vec1.length}`);  

// Mostrando o comprimento do segundo vetor
console.log(`Comprimento de vec2: ${vec2.length}`);