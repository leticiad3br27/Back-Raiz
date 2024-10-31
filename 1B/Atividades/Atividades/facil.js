import entradaDados from 'readline-sync';

// 1. Função que recebe uma string e retorna a mesma string em caixa alta.
function uper(){
    let nome = entradaDados.question('Digite seu nome: ');
    return nome.toUpperCase();
}
console.log(uper());

// 2. Função que recebe um número e verifica se ele é par ou ímpar.
function verificarParidade() {
    let numero = entradaDados.questionInt('Digite um número: ');
    if (numero % 2 === 0) {
        return 'O número é par.';
    } else {
        return 'O número é ímpar.';
    }
}
console.log(verificarParidade());

//03. Crie uma função que receba dois números como parâmetros e retorne a soma deles.//

function soma(){
    let numero1 = entradaDados.questionInt('Digite 1° número: ');
    let numero2 = entradaDados.questionInt('Digite 2° número: ');
    return numero1+numero2
    
}
console.log(soma())
//4. Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.//
function calcularValorComPorcentagem(valor, porcentagem) {
    let valorAcrescido = valor + (valor * porcentagem / 100);
    return valorAcrescido;
}

console.log(calcularValorComPorcentagem(1400,12))

function calcularDesconto(valorOriginal, percentualDesconto) {
    let valorDesconto = valorOriginal * (percentualDesconto / 100);
    let valorFinal = valorOriginal - valorDesconto;
    return valorFinal;
}
console.log(calcularDesconto(1400,12))
