/*04. Crie uma função que receba um valor e uma
porcentagem como parâmetros. A função deve retornar o
valor acrescido da porcentagem indicada. */
import input from "readline-sync"

function aumento (valorInicial, valorPorcentagem){
    let resultado = valorInicial + valorInicial * (valorPorcentagem/100)
    console.log(`O aumento de ${valorPorcentagem}% para o valor inicial de ${valorInicial} é de ${resultado}`)
}

let numero = input.questionInt("Digite qualquer número: ")

let porcentagem = input.questionInt("Digite a porcentagem de aumento que deseja (apenas númeo): ")

aumento(numero, porcentagem)