/*Solicite ao usuário para inserir um número representando um dia da 
semana (1 a 7) e mostre o nome do dia correspondente. */
import coletarDados from "readline-sync";

let dia = coletarDados.questionInt("Digite o número da semana: ")

switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("sexta")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log('Valor inválido')
        break;
}