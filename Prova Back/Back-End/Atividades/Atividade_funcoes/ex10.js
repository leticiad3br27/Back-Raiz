/*10. Desenvolva uma função chamada validarCPF que recebe
um CPF como uma string numérica e verifica se ele é válido de
acordo com as regras de validação de CPF. A função deve
retornar true se o CPF for válido e false caso contrário.*/
import input from "readline-sync"

let numerosVerificadoresApresentados;
let cpfSemNumeroVerificador;
let numeroSeparado;
let soma = 0;
let numeroSeparadoMultiplicado;
let numeroVerificador;
let restoDaDivisao;
let cont = 0;
let multiplicador = 10;

function validarCPF(cpfVariavel) {
    cpfVariavel = cpfVariavel.replace(/-/g, '')
    cpfVariavel = cpfVariavel.replace(/\./g, '')
    if (cpfVariavel.length != 11) {
        console.log("Seu cpf não a o número correto de digitos")
        return false
    }
    numerosVerificadoresApresentados = cpfVariavel.slice(-2);
    cpfSemNumeroVerificador = cpfVariavel.slice(0, 9);

    while (cont < 2) {
        for (let index = 0; index < cpfSemNumeroVerificador.length; index++) {
            numeroSeparado = cpfSemNumeroVerificador[index];
            numeroSeparadoMultiplicado = numeroSeparado * (multiplicador - index);
            soma += numeroSeparadoMultiplicado;
        };

        restoDaDivisao = soma % 11;
        if (restoDaDivisao < 2) {
            numeroVerificador = 0
        } else {
            numeroVerificador = 11 - restoDaDivisao;
        }
        cpfSemNumeroVerificador += numeroVerificador.toLocaleString()
        multiplicador += 1
        soma = 0
        cont++
        
    }
    if (cpfVariavel === cpfSemNumeroVerificador) {
        console.log("Seu cpf é válido")
        return true
    } else {
        console.log("Seu cpf não é válido")
        return false
    }
};

let cpf = input.question("Digite seu cpf: ")
validarCPF(cpf)