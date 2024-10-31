/*Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de 
alunos.
O Programa deverá:
Ler o número de alunos da turma;
Ler as notas dos 4 bimestres de cada aluno;
Calcular e imprimir a média do aluno;
Calcular e imprimir a média da turma. */

import cd from "readline-sync"

let nAlunos = cd.questionInt("Qauntos alunos á na turma? ");
let cont = 1;
let mediaturma = 0
while (nAlunos >= cont) {
    console.log(`Agora digite a notá do ${cont}º aluno:`);
    let nb1 = cd.questionInt("Digite a nota do primeiro bimestre: ");
    let nb2 = cd.questionInt("Digite a nota do segundo bimestre: ");
    let nb3 = cd.questionInt("Digite a nota do terceiro bimestre: ");
    let nb4 = cd.questionInt("Digite a nota do quarto bimestre: ");
    let media = (nb1+nb2+nb3+nb4)/4
    console.log(`A média do ${cont}º aluno é de ${media.toFixed(2)}`);
    cont++;
    mediaturma += media 
    
}
console.log(`A média da turma é de ${(mediaturma/nAlunos).toFixed(2)}`)