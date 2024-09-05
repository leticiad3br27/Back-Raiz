/* Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci */

let numero1 = 0;
let numero2 = 1;
let soma;
console.log(`O 1º da sequencia é: ${numero1}`)
for (let sequencia = 2; sequencia <= 20; sequencia++) {
    console.log(`O ${sequencia}º da sequencia é: ${numero2}`);
    soma = numero1 + numero2;
    numero1 = numero2;
    numero2 = soma;
}