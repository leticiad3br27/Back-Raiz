import entradaDados from 'readline-sync';

let nome = entradaDados.question(`Digie seu nome: `);
console.log(`Olá ${nome}`);

/*Pede nome e 2 valores numéricos

var numero1 = entradaDados.questionInt(`Digite o primeiro número: `);
var numero2 = entradaDados.questionInt(`Digite o segundo número: `);
console.log(`${numero1} + ${numero2} = ${numero1+numero2}`);

*/
/*let idade = 18

if (idade >= 18) console.log('Maior de idade');
else console.log('menor de idade');

if (idade >= 18) {
    console.log('Maior de idade.')
}
else {
    console.log('Menor de idade.')
}

console.log(idade >= 18 ? "Maior de idade" : "Maior de idade");*/