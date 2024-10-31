/*Crie uma classe chamada Imovel com os seguintes atributos:
▪ quartos:
▪ tipo:
▪ endereco:
Crie um método na classe chamado exibirInformacoes que
retorna uma string com as informações do imóvel.
Em seguida, instancie dois objetos da classe Imovel
representando uma casa e um apartamento com as seguintes
características:
Casa:
▪ Quartos: 4
▪ Tipo: "Casa"
▪ Endereço: "Rua da Amizade, 789 - Bairro Alegre"
Apartamento:
▪ Quartos: 2
▪ Tipo: "Apartamento"
▪ Endereço: "Avenida da Paz, 123 - Centro"
Chame o método exibirInformacoes para cada instância e exiba o
resultado no console. */

class Imovel{
    quartos;
    tipo;
    endereco;
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}.`
    }
}


const Casa = new Imovel();
Casa.quartos =  4;
Casa.tipo = "Casa";
Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";
console.log(Casa.exibirInformacoes())

const Apartamento = new Imovel();
Apartamento.quartos =  2;
Apartamento.tipo = "Apartamento";
Apartamento.endereco = "Avenida da Paz, 123 - Centro";
console.log(Apartamento.exibirInformacoes())

