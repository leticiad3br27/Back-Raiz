/*Crie uma variável com um número e use o operador ternário para verificar se é
par ou ímpar. */


let numero_qualquer = 19

/*Jeito Com If*/
if(numero_qualquer%2==0){
    console.log('Número par.')
}
else{
    console.log('Número ímpar.')
}
/*Jeito com ternário*/
console.log(numero_qualquer%2 == 0 ? "Número par" : "Número Ímpar");
