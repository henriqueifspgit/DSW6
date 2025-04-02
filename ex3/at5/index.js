import { readFileAsText } from "./fileReader.js";


const textData = readFileAsText("data.csv");
console.log("Texto:\n", textData);