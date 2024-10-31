/*import entradaDados from 'readline-sync';

let dia = entradaDados.questionInt('Digite um número de 1 a 7: ');

switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Número inválido. Digite um número de 1 a 7.');*/



/*Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome 
do mês*/
/*
import entradaDados from 'readline-sync';

let mes = entradaDados.questionInt('Digite um número de 1 a 12: ');

switch (mes) {
    case 1:
        console.log('janeiro');
        break;
    case 2:
        console.log('fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Número inválido. Digite um número de 1 a 12.');}*/


        // Solicita ao usuário que insira dois valores e a operação desejada


/*import entradaDados from 'readline-sync';

const num1 = entradaDados.questionFloat("Digite o primeiro número:");
const num2 =entradaDados.questionFloat("Digite o segundo número:");
const operacao =entradaDados.question("Escolha a operação :");

// Realiza a operação com base na escolha do usuário
let resultado;
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        console.log("Operação inválida. Escolha +, -, *, ou /.");
}

// Exibe o resultado
console.log(`Resultado: ${resultado}`);*/


import java.util.Scanner;

public class CalculadoraSalario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a categoria de bonificação (A, B, C ou D): ");
        char categoria = scanner.next().charAt(0);

        System.out.print("Digite o salário atual do funcionário: ");
        double salarioAtual = scanner.nextDouble();

        double novoSalario;

        switch (categoria) {
            case 'A':
                novoSalario = salarioAtual * 1.05; // Aumento de 5%
                break;
            case 'B':
                novoSalario = salarioAtual * 1.10; // Aumento de 10%
                break;
            case 'C':
                novoSalario = salarioAtual * 1.15; // Aumento de 15%
                break;
            case 'D':
                novoSalario = salarioAtual * 1.20; // Aumento de 20%
                break;
            default:
                System.out.println("Categoria inválida. Digite A, B, C ou D.");
                return; // Encerra o programa
        }

        System.out.println("Novo salário: R$" + novoSalario);
    }
}
