/*Escreva um programa que itere sobre os caracteres de uma 
string e imprima cada caractere.*/
import cd from "readline-sync"
let string = cd.question("Digite qualquer coisa: ")
console.log("\nForma 1")
let palavraSeparada = "";
for (let letra of string) {
    palavraSeparada += letra+"-"
}

palavraSeparada = palavraSeparada.slice(0, -1);
console.log(palavraSeparada)

console.log("\nForma 2")
for (let letra of string) {
    console.log(letra)
}


