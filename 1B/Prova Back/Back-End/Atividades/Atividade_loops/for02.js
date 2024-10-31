/*Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o 
valor de imposto de renda a ser pago.
Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
Salário <= R$ 2.100,00 = isento
Salário <= R$ 2.800,00 = 7,5%
Salário <= R$ 3.750,00 = 15%
Salário <= R$ 4.660,00 = 22.5%
Salário > R$ 4.660,00 = 27.5% */
import cd from "readline-sync"

let mensagemcompleta = "\nLista de quem e quanto deverá pagar em seu imposto de renda:"

for (let cont = 1; cont <= 10; cont++) {
    let nome = cd.question("\nDigite seu nome: ")
    let salario = cd.questionFloat("Digite seu sálario bruto: ").toFixed(2)
    
    let imposto = 0
    
    if (salario <= 2100) {
        mensagemcompleta += `\n${nome} está isento`
    } else if (salario <= 2800) {
        imposto = salario * 0.075
        mensagemcompleta += `\n${nome} deverá pagar R$ ${imposto.toFixed(2)}`
    } else if (salario <= 3750) {
        imposto = salario * 0.15
        mensagemcompleta += `\n${nome} deverá pagar R$ ${imposto.toFixed(2)}`
    } else if (salario <= 4660) {
        imposto = salario * 0.225
        mensagemcompleta += `\n${nome} deverá pagar R$ ${imposto.toFixed(2)}`
    } else if (salario > 4660) {
        imposto = salario * 0.275
        mensagemcompleta += `\n${nome} deverá pagar R$ ${imposto.toFixed(2)}`
    }
}

console.log(mensagemcompleta)
