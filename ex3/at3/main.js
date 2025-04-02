import { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit } from "./conversor.js";

const kgParaLb = quilogramaParaLibra(5);
const mParaFt = metroParaPe(10);
const cParaF = celsiusParaFahrenheit(25);

console.log(`Quilogramas para Libras: 5 kg = ${kgParaLb.toFixed(4)} lb`);
console.log(`Metros para Pés: 10 m = ${mParaFt.toFixed(4)} ft`);
console.log(`Celsius para Fahrenheit: 25°C = ${cParaF.toFixed(0)}°F`);