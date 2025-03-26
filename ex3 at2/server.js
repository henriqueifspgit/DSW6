import express from "express";
import { User, printName, printAge } from "./user.js";

const app = express();
const port = 8080;

const user = new User("Amazing", 100);

app.get("/user_data", (req, res) => {
    const userData = `User's name is ${user.name} and User's age is ${user.age}`;
    
    // Logando no console (opcional)
    printName(user.name);
    printAge(user.age);
    
    res.send(userData);
});

// Inicia o servidor na porta 8080
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/user_data`);
});