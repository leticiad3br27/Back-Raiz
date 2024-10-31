/*09. Crie uma função que valide se uma senha atende aos
critérios estabelecidos, como ter no mínimo 8 caracteres, pelo
menos uma letra maiúscula, pelo menos uma letra minúscula e
pelo menos um caractere especial */
import input from "readline-sync"

function vereficador(senha) {
    if (senha.toUpperCase() === senha) {
        console.log("A senha não contem letras minúsculas.")
    } else if (senha.toLowerCase() === senha) {
        console.log("A senha não contem letras maiúcula.")
    } else if (senha.replace(/[^a-zA-Z0-9]/g, '') === senha) {
        console.log("A sua senha não tem caractere especial.")
    } else if (senha.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === senha) {
        console.log("A sua senha não tem caractere especial.")
    } else if (senha.length < 8) {
        console.log("Sua senha é muito curta.")
    } else console.log("Sua senha é segura.")
}

let senha = input.question("Crie uma senha: ")

vereficador(senha)