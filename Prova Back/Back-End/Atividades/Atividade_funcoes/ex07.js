/*07. Desenvolva uma função que converta
uma temperatura de Celsius para Fahrenheit.
A função deve receber a temperatura em
Celsius como parâmetro e retornar a
temperatura convertida. */
import input from "readline-sync"

function conversao(celsius) {
    let  fahrenheit = (celsius * 9/5) + 32
    return console.log(`${celsius}°C = ${fahrenheit}°F`)
}

let c = input.questionInt("Informe a temperatura em celcius: ")

conversao(c)