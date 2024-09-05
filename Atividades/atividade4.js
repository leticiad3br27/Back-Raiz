/*
//Exemplo de utilização do for...in 
const pessoa = {
  nome: "Davi",
  idade: 25,
  profissao: "Desenvolvedor",
};

for (let key in pessoa) {
  console.log(`${key} : ${pessoa[key]}`);
}

//Mais um exemplo
let aluno = {
  nome: "Marcos",
  email: "marcos@email.com",
  idade: 25,
};

for (let dados in aluno) {
  console.log(aluno[dados]);
}
let numeroAlunos = prompt("Digite o número de alunos da turma:");
let somaMedias = 0;

for (let i = 0; i < numeroAlunos; i++) {
    let somaNotas = 0;
    for (let j = 0; j < 4; j++) {
        let nota = prompt(`Digite a nota do ${j+1}º bimestre do aluno ${i+1}:`);
        somaNotas += parseFloat(nota);
    }
    let mediaAluno = somaNotas / 4;
    alert(`A média do aluno ${i+1} é ${mediaAluno.toFixed(2)}`);
    somaMedias += mediaAluno;
}

let mediaTurma = somaMedias / numeroAlunos;
alert(`A média da turma é ${mediaTurma.toFixed(2)}`);



//Outro exemplo, agora com carros
let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {
        let preco = propriedade;
        let desconto = ( carro[preco] * percentual_desconto ) / 100;
        let novo_preco = carro[preco] - desconto;
        console.log("novo preço: R$" + novo_preco + ",00");
    } else {
        console.log(propriedade + ": " + carro[propriedade]);
    }
}*/



/*01. Escreva um programa que peça ao usuário para digitar um número e, em seguida, 
imprima a tabuada desse número usando um loop while.*/

/*import entradaDados from 'readline-sync';

let numero = entradaDados.questionInt('Digite um número : ');

//Tabuada com while
let cont = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while (cont <= 10) {
    let resultado = numero * cont;
    console.log(`${numero} x ${cont} = ${resultado}`);
    cont++;}

   /* 02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de 
alunos.*/

/*import entradaDados from 'readline-sync';

let numeroAlunos =  entradaDados.questionInt("Digite o número de alunos da turma:");
let somaMedias = 0;

for (let i = 0; i < numeroAlunos; i++) {
    let somaNotas = 0;
    for (let j = 0; j < 4; j++) {
        let nota =  entradaDados.questionInt(`Digite a nota do ${j+1}º bimestre do aluno ${i+1}:`);
        somaNotas += parseFloat(nota);
    }
    let mediaAluno = somaNotas / 4;
    console.log(`A média do aluno ${i+1} é ${mediaAluno.toFixed(2)}`);
    somaMedias += mediaAluno;
}

let mediaTurma = somaMedias / numeroAlunos;
console.log(`A média da turma é ${mediaTurma.toFixed(2)}`);

*/
import readlineSync from 'readline-sync';

// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializa o número de tentativas
let numTentativas = 0;

// Função para verificar se o palpite está correto
function verificarPalpite(palpite) {
    numTentativas++;

    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou em ${numTentativas} tentativas.`);
        return true;
    } else if (palpite < numeroAleatorio) {
        console.log('Tente um número maior.');
    } else {
        console.log('Tente um número menor.');
    }
    return false;
}

// Início do jogo
console.log('Bem-vindo ao jogo de adivinhação!');
console.log('Tente adivinhar o número entre 1 e 100.');

// Loop até o jogador acertar
while (true) {
    let palpite = readlineSync.questionInt('Digite seu palpite: ');

    // Verifica se o palpite é um número
    if (isNaN(palpite)) {
        console.log('Por favor, insira um número válido.');
    } else {
        // Se o palpite estiver correto, encerra o loop
        if (verificarPalpite(palpite)) {
            break;
        }
    }
}




/*
let n1 = 0, n2 = 1, nextTerm;

console.log('Sequência de Fibonacci:');

for (let i = 1; i <= 20; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


let pessoas = [];
for(let i=0; i<10; i++) {
    let nome = prompt("Digite o nome:");
    let salario = parseFloat(prompt("Digite o salário bruto:"));
    let imposto;
    if(salario <= 2100) {
        imposto = 0;
    } else if(salario <= 2800) {
        imposto = salario * 0.075;
    } else if(salario <= 3750) {
        imposto = salario * 0.15;
    } else if(salario <= 4660) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }
    pessoas.push({nome: nome, imposto: imposto});
}

for(let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Imposto de Renda: R$ ${pessoa.imposto.toFixed(2)}`);
}
let objeto = {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3'
};

for (let chave in objeto) {
    if (objeto.hasOwnProperty(chave)) {
        console.log(`Chave: ${chave}, Valor: ${objeto[chave]}`);
    }
}
let array = ['elemento1', 'elemento2', 'elemento3'];

for (let i = 0; i < array.length; i++) {
    console.log(`Valor: ${array[i]}`);
}
let string = 'Hello, World!';

for (let i = 0; i < string.length; i++) {
    console.log(`Caractere: ${string[i]}`);
}*/