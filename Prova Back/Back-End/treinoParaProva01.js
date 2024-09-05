import input from "readline-sync"

function cifraDeCesar(mensagem, deslocamento, operacao) {
    let resultado = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];
        if (char.match(/[a-z]/i )) {
            let indice = alfabeto.indexOf(char.toUpperCase());
            if (indice !== -1) {
                if (operacao === 'criptografar') {
                    indice = (indice + deslocamento) % 26;
                } else if (operacao === 'descriptografar') {
                    indice = (indice - deslocamento + 26) % 26;
                }
                resultado += char === char.toUpperCase() ? alfabeto[indice] : alfabeto[indice].toLowerCase();
            }
        } else {
            resultado += char;
        }
    }
    
    return resultado;
}

const mensagem = input.question("Digite a mensagem:");
const deslocamento = parseInt(input.question("Digite o deslocamento:"));
const operacao = input.question("Criptografar ou descriptografar? (criptografar/descriptografar)");


console.log(cifraDeCesar(mensagem, deslocamento, operacao));