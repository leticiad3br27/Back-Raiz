/*Escreva um programa que simule um jogo de adivinhação
onde o usuário deve adivinhar um número aleatório entre 1 e 100.
O programa deve fornecer dicas sobre se o número digitado é
maior ou menor que o número aleatório. O jogo deve continuar até
que o usuário adivinhe corretamente. */

import cd from "readline-sync"

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;
let tentativas = 0;

do {
    palpite = cd.questionInt("Tente adivinhar o número secreto (entre 1 e 100):");

    if (palpite < numeroAleatorio) {
        console.log("O número secreto é maior.");
    } else if (palpite > numeroAleatorio) {
        console.log("O número secreto é menor.");
    }

    tentativas++;
} while (palpite !== numeroAleatorio);

console.log(`Parabéns! Você acertou o número secreto ${numeroAleatorio} em ${tentativas} tentativas!`);
