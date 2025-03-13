// Atividade 1. Verifique o tipo das diferentes variáveis usando typeof:
let variable1 = 10;
let variable2 = "hello";
let variable3 = true;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);


// Atividade 2. Acesse as propriedades do objeto a seguir:
let person = {
name: "John",
age: 30,
city: "New York"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);


/* Atividade 3. Verifique o uso de var, let e const e veja as saídas do código
em um script. Explique o porque do resultado apresentado: */
var a = 1;
let b = 2;
const c = 3;

a = 10 // Qual a saída? R: = 10
console.log(a);
b = 20 // Qual a saída? R: = 20
console.log(b);
c= 30 // Qual a saída?  R: = TypeError: Assignment to constant variable.
console.log(c);


/* Atividade 4. Verifique quais dos valores abaixo são Truthy e Falsy. Faça-o
utilizando a função Boolean(valor) e imprima o resutado: */
10  
true
false
{}
undefined
null
''
'abba'
0

Boolean(10)
Boolean(true)
Boolean(false)
Boolean({})
Boolean(undefined)
Boolean(null)
Boolean('')
Boolean('abba')
Boolean(0)


/* Atividade 5. Verifique as comparações a seguir com os operadores == e ===.
Qual será a saída para cada um deles? Teste em um script para ver se acertou: */
5 == "5"
5 === "5"
5 == 5
5 === 5

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 == 5);     // true
console.log(5 === 5);    // true


/* Atividade 6. Faça uma atribuição via desestruturação utilizando o objeto
abaixo: */
let person = { name: "Alice", age: 25 };
// faça aqui a atribuição via desestruturação
let { name, age } = person;

console.log(name); // Alice
console.log(age); // 25


/* Atividade 7. Defina uma função utilizando function e faça o código abaixo
funcionar: */
// Definindo a função
function add(a, b) {
    return a + b;
  }
console.log(add(2, 3)); // 5


/* Atividade 8. Defina uma função utilizando Arrow Function e faça o código
abaixo funcionar: */
// Definindo a função utilizando arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6


/* Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função
que as receba como parâmetro. A função deve mostrar o valor resultante: */
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

// Função que recebe outra função como parâmetro e executa
function executeFunction(fn, a, b) {
    return fn(a, b);
  }

console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6