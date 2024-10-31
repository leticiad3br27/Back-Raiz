/**Escreva um programa que itere sobre as propriedades 
de um objeto e imprima suas chaves e valores.*/

let produtoEmbalado = {
    nome: "Laptop Acer",
    categoria: "Eletrônicos",
    serie: "Aspire 3 a315-23"
};
for (let dados in produtoEmbalado) {
    console.log([dados]+": "+produtoEmbalado[dados])
}