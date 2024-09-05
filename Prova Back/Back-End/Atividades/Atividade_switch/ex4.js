/*Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:

Categoria Percentual
A 5%
B 10%
C 15%
D 20%

Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch. */
import coletarDados from "readline-sync";

let categoria = coletarDados.question("Digite sua categoria: ").toLocaleUpperCase();
let salarioAtual = coletarDados.questionFloat("Digite seu sálario atual: ");

switch (categoria) {
    case "A":
        console.log(`Seu sálario agora é de R$${(salarioAtual * 1.05).toFixed(2)}`)
        break;
    case "B":
        console.log(`Seu sálario agora é de R$${(salarioAtual * 1.1).toFixed(2)}`)
        break;
    case "C":
        console.log(`Seu sálario agora é de R$${(salarioAtual * 1.15).toFixed(2)}`)
        break;
    case "D":
        console.log(`Seu sálario agora é de R$${(salarioAtual * 1.2).toFixed(2)}`)
        break;
    default:
        console.log("Sua categoria é inválida.")
        break;
}