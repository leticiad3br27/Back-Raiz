/*Implementar um programa que simule uma calculadora. O usuário deverá 
informar dois valores e a operação desejada.
Com auxílio de um switch deve ser computado e mostrado o resultado da 
operação. */
import coletarDados from "readline-sync";

let numero01 = coletarDados.questionInt('Digite número 1: ');
let numero02 = coletarDados.questionInt('Digite número 2: ');
let operador = coletarDados.question('Digite qual operador você deseja:\nOperadores:\n(+) Soma\n(-) Subtração\n(*) Multiplicação\n(/) Divisão\nSua escolha: ');

switch (operador) {
    case "+":
        console.log(`${numero01} + ${numero02} = ${numero01 + numero02}`);
        break;
    case "-":
        console.log(`${numero01} - ${numero02} = ${numero01 - numero02}`);
        break;
    case "*":
        console.log(`${numero01} * ${numero02} = ${numero01 * numero02}`);
        break;
    case "/":
        console.log(`${numero01} / ${numero02} = ${numero01 / numero02}`);
        break;

    default:
        console.log("Operador inválido.")
        break;
}