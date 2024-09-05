/*05. Desenvolva uma função que calcule o valor de um
produto com desconto. A função deve receber o valor
original do produto e o percentual de desconto como
parâmetros, e retornar o valor com desconto aplicado.
Utilize essa função para calcular o valor final de
diferentes produtos.*/

import input from "readline-sync"

function aumento (valorInicial, valorPorcentagem){
    let resultado = valorInicial - valorInicial * (valorPorcentagem/100)
    console.log(`O desconto de ${valorPorcentagem}% para o valor inicial de R$ ${valorInicial.toFixed(2)} é de R$ ${resultado.toFixed(2)}`)
}

let numero = input.questionInt("Digite qualquer número: ")

let porcentagem = input.questionInt("Digite a porcentagem de aumento que deseja (apenas númeo): ")

aumento(numero, porcentagem)

