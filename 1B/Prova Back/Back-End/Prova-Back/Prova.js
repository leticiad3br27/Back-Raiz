/*Leticia Silva Almeida | Hiago Gabriel Gonçalves André*/
import input from "readline-sync"

function AreaRetangulo(altura, base) {
    let areaRetangulo = altura * base;
    return areaRetangulo.toFixed(2)


};

function AreaCirculo(raio) {
    let areaCirculo = 3.1415 * (raio * raio);
    return areaCirculo.toFixed(2)
};


function AreaTriangulo(base, altura) {
    let areaTriangulo = (base * altura) / 2;
    return areaTriangulo.toFixed(2)

};

let escolha;

do {
    let opcao;
    opcao = input.question("\nQual das opções a baixo deseja Realizar?\n 1- Área do Retângulo \n 2- Área Do Triângulo \n 3- Área do Círculo \n 4- Encerrar Programa \nDigite aqui sua resposta: ");

    switch (opcao) {
        case "1":
            let valorAlturaRetangulo;
            let valorBaseRetangulo;

            do {
                valorAlturaRetangulo = input.questionFloat('\nDigite Um valor positivo para a Altura do Retângulo: ');
            } while (valorAlturaRetangulo <= 0);

            do {
                valorBaseRetangulo = input.questionFloat('\nDigite Um valor positivo para a Base do Retângulo: ');
            } while (valorBaseRetangulo <= 0);

            console.log(`\nA área do retângulo de base de valor ${valorBaseRetangulo} e altura de valor ${valorAlturaRetangulo} é de ${AreaRetangulo(valorAlturaRetangulo, valorBaseRetangulo)}`)
            escolha = input.question("\nDeseja realizar outra operação? \n (Sim) Para continuar \n (Qualquer Letra) para Sair \n Digite aqui sua resposta: ").toUpperCase();
            break


        case "2":
            let valorAlturatriangulo;
            let valorBasetriangulo;

            do {
                valorAlturatriangulo = input.questionFloat('\nDigite Um valor positivo para a Altura do Triângulo: ');
            } while (valorAlturatriangulo <= 0);

            do {
                valorBasetriangulo = input.questionFloat('\nDigite Um valor positivo para a Base do Triângulo: ');
            } while (valorBasetriangulo <= 0);

            console.log(`\nA area Triângulo de base de valor ${valorBasetriangulo} e altura de valor ${valorAlturatriangulo} é de ${AreaTriangulo(valorBasetriangulo, valorAlturatriangulo)}`)
            escolha = input.question("\nDeseja realizar outra operação? \n (Sim) Para continuar \n (Qualquer Letra) para Sair \n Digite aqui sua resposta: ").toUpperCase();
            break


        case "3":
            let valorRaio;

            do {
                valorRaio = input.questionFloat('\nDigite Um valor positivo Para o raio do Circulo: ');
            } while (valorRaio <= 0);

            console.log(`\nA área do Círculo de Raio ${valorRaio} é de ${AreaCirculo(valorRaio)}`);
            escolha = input.question("\nDeseja realizar outra operação? \n (Sim) Para continuar \n (Qualquer Letra) para Sair \n Digite aqui sua resposta: ").toUpperCase();
            break

        case "4":
            break
    }

} while (escolha == "SIM");

console.log("\nObrigado por ultilizar nosso programa!!!");