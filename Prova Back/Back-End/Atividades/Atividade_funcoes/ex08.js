/*08. Crie uma função que calcula o IMC. A
função deve receber a altura e o peso como
parâmetros e retornar o IMC. */
import input from "readline-sync"
function imc(peso, altura) {
    let resultado = peso / (altura * altura);
    return `O IMC da pessoa que tem ${altura.toFixed(2)} de altura e pesa ${peso} é de ${resultado.toFixed(2)}`;
}

let peso = input.questionInt("Digite seu peso: ")
let altura = input.questionFloat("Digite sua altura em metros: ")

console.log(imc(peso,altura))
