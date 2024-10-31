/*06. Desenvolva uma função que calcule a
área de um círculo. A função deve receber o
raio como parâmetro e retornar a área
calculada. */
import input from "readline-sync"

function area(raio){
    let resultado = 3.14 * (raio * raio)
    return `A área de um círculo com o raio de ${raio} é de ${resultado}`
}

let r = input.questionInt("Digite o raio do cículo a ser calculada sua área: ")

console.log(area(r))