/*Escreva um programa que itere sobre os elementos de um 
array e imprima seus valores. */

let alunosArray = [
    {numeroChamada: 1, nome: "Ana",notaB1: 10, notaB2: 10, notaB3: 10, notaB4: 10, meidafinal: 10, situacao: "Aprovada"},
    {numeroChamada: 17, nome: "Vinicius",notaB1: 5, notaB2: 6, notaB3: 4, notaB4: 5, meidafinal: 5, situacao: "Recuperação"},
    {numeroChamada: 22, nome: "Wesley",notaB1: 1, notaB2: 3, notaB3: 4, notaB4: 3, meidafinal: 3, situacao: "Reprovado"}
];

for (let elemento of alunosArray) {
    console.log(`\nNome: ${elemento.nome} - Média final: ${elemento.meidafinal} - Situação: ${elemento.situacao}`);
}