/*11. Escreva uma função que informe o retorno de um
investimento (montante) com base nos valores do capital
inicial, tempo em meses e taxa de juros mensal, fornecidos
pelo usuário.
Use a fórmula: M = C * (1+i)t
Onde:
C = Capital inicial investido
i = Taxa de juros, em percentual
t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.
 */
import input from "readline-sync"

let resultadoDoInvestimento;
let taxaDeJurosDecimal;

function retornoInvestimento(capitalInicial, taxaDeJurosPorcentagem, tempo) {
    taxaDeJurosDecimal = taxaDeJurosPorcentagem / 100;
    resultadoDoInvestimento = capitalInicial * (1+taxaDeJurosDecimal) * tempo;
    return `Após ${tempo} meses com ${taxaDeJurosPorcentagem}% de taxa de juros, seu capital irá de R$ ${capitalInicial.toFixed(2)} para R$ ${resultadoDoInvestimento.toFixed(2)}` 
};

let c = input.questionFloat("Digite o seu capital inicial: ")
let i = input.questionInt("Digite a taxa de juros, em percentual: ")
let t = input.questionInt("Digite o tempo de investimento em meses: ")


console.log(retornoInvestimento(c, i, t));