/* Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
propriedades devem ser comparadas, você pode usar o operador typeof.
    Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
    Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
também produz "object". */

function deepEqual(a, b) {
    // Se ambos são o mesmo valor (identidade), retorna true
    if (a === b) {
      return true;
    }
  
    // Verifica se algum dos valores é null ou se ambos são objetos
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
      return false;
    }
  
    // Se ambos são objetos, comparamos suas propriedades
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    // Se o número de propriedades for diferente, os objetos são diferentes
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Comparar recursivamente as propriedades de cada objeto
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    // Se todas as verificações passarem, os objetos são iguais
    return true;
  }

let obj1 = {a: 1, b: 2};

console.log(deepEqual(obj1.a, obj1.b));
