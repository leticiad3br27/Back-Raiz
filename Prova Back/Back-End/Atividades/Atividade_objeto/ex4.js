/*Crie uma classe chamada Veiculo com os seguintes atributos:
▪ marca
▪ modelo
▪ ano
Crie um método na classe chamado exibirDetalhes que retorna
uma string com as informações do veículo.
Em seguida, instancie dois objetos da classe Veiculo
representando um carro e uma motocicleta com as seguintes
características:
Carro:
▪ Marca: "Toyota"
▪ Modelo: "Corolla"
▪ Ano: 2022
Motocicleta:
▪ Marca: "Honda"
▪ Modelo: "CBR 600RR"
▪ Ano: 2021
Chame o método exibirDetalhes para cada instância e exiba o
resultado no console. */

class Veiculo{
    marca;
    modelo;
    ano;
    exibirDetalhes(){
        return `${this.marca} do modelo ${this.modelo} do ano ${this.ano}`
    }
}
const Carro = new Veiculo();
Carro.marca = "Toyota"
Carro.modelo =  "Corolla"
Carro.ano = 2022
console.log(Carro.exibirDetalhes())

const Motocicleta = new Veiculo();
Motocicleta.marca = "Honda"
Motocicleta.modelo = "CBR 600RR"
Motocicleta.ano = 2021
console.log(Motocicleta.exibirDetalhes())