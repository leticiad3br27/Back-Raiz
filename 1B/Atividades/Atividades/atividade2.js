let apartamento={
    quarto:2,
    tipo: 'apartamento',
    endereço:'Avenida Principal,456-Centro',
    Andar: 7,

    print:function(){
        console.log(`${this.tipo} com ${this.quarto} quartos,localizado no ${this.Andar}° andar da ${this.endereço}`)},
}
console.log(apartamento.print)